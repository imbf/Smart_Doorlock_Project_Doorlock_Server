const express = require('express');
const router = express.Router();
const { doorlockdb, mobiusdb} = require('../db.js');
const accessControl = require('../views/accessControl');
const accessList = require('../views/accessList');
const AWS = require('aws-sdk');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
// require Amazon-Web-Service Software-Development-Kit
AWS.config.region = "us-east-1"; // Region which use SMS-Service for AWS 
AWS.config.update({
   accessKeyId: "",   //Access Key for AWS user
   secretAccessKey: "",   //Secret Access Key for AWS User
});

router.get('/', (request, response) => {
   var queryResult=``;
   doorlockdb.query(`SELECT * FROM smsservice ORDER BY createtime DESC LIMIT 5`, function(error,result,fields){
      queryResult = result;
      response.send(accessControl.html(queryResult));
   });
});

router.get('/register', (request, response) => {
   var date = moment().format('YYYY-MM-DD HH:mm:ss');
   var randomPassword = Math.floor(Math.random()*90000 + 10000);
   var parsePhoneNumber = ``;
   for(var i=0;i<request.query.phoneNumber.length;i++){
      if(request.query.phoneNumber.charAt(i) != '-')
         parsePhoneNumber += request.query.phoneNumber.charAt(i);
   }
   doorlockdb.query(`INSERT INTO smsservice (SMSname, phonenumber, activetime, unactivetime, disposablepassword,createtime) 
   VALUES('${request.query.name}', '${parsePhoneNumber}', '${request.query.activeTime}', '${request.query.unactiveTime}', ${randomPassword},'${date}');`,function(error, result, fields){
      console.log(result);
   });
   response.redirect('/SMSService');
});


router.get('/send', (request, response) => {
   doorlockdb.query(`SELECT * FROM smsservice WHERE createtime='${request.query.createtime}'`, (error, result, fields) => {
    // AWS-SNS-SMS 사용을 위한 Parameters
    var params = {
         Message: `
일회용 비밀번호 : ${result[0].disposablepassword}
스마트 도어락이 설치된 장소의 일회용 비밀번호입니다.
비밀번호 유효 시간은
${result[0].activetime} ~ ${result[0].unactivetime} 이며
전송된 비밀번호는 도어락이 열리고 난 후 비밀번호로써의 효력은 사라집니다.
         `,
         PhoneNumber: `82${result[0].phonenumber}`,
         MessageStructure: 'String',
         Subject: 'SmartDoorLock',
      }
      console.log(params.Message);
      doorlockdb.query(`UPDATE smsservice SET sendnumber='1' WHERE createtime='${request.query.createtime}'`);
      // SMS 전송을 위한 Code
      var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
      publishTextPromise.then(
         function(data){
            console.log("messageID is " + data.MessageId );
         }).catch(
            function(err) {
            console.error(err, err.stack);
            response.redirect('/');
         });
   });
   response.redirect('/SMSService');
});


router.get('/list', (request, response) => {
   doorlockdb.query(`SELECT * FROM smsservice WHERE sendnumber=1 ORDER BY createtime DESC LIMIT 10`,function(error,result,fields){
      response.send(accessList.html(result));
   });
}); 

module.exports = router;