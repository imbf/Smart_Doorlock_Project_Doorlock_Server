const express = require('express');
const router = express.Router();
const { doorlockdb, mobiusdb} = require('../db.js');
const accessControl = require('../views/accessControl');

const AWS = require('aws-sdk');

// require Amazon-Web-Service Software-Development-Kit

AWS.config.region = "us-east-1"; // Region which use SMS-Service for AWS 
AWS.config.update({
   accessKeyId: "AKIA3FQV6I4BN5BS2DUA",   //Access Key for AWS user
   secretAccessKey: "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",   //Secret Access Key for AWS User
});

router.get('/', (request, response) => {
      response.send(accessControl.html());
});

router.get('/register', (request, response) => {
   var randompassword = Math.floor(Math.random()*90000 + 10000);
   console.log(request.query.name)
   /*
   doorlockdb.query(`INSERT INTO smsservice (SMSname, phonenumber, activetime, unactivetime, disposablepassword) 
   VALUES('${request.query.name}', '${request.query.phonenumber}', '${request.query.activetime}', '${request.query.unactivetime}', ${randompassword});`,function(error, result, fields){
      console.log(result);
   });
   */
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
도어락이 열리고 난 후 비밀번호로써의 효력은 사라집니다.
         `,
         PhoneNumber: `820${result[0].phonenumber}`,
         MessageStructure: 'String',
         Subject: 'SmartDoorLock',
      }
      console.log(params.Message);
      doorlockdb.query(`UPDATE smsservice SET sendnumber='1' WHERE createtime='${request.query.createtime}'`);
      /*
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
      */
   });
   response.redirect('/SMSService');
});

router.get('/delete', (request, response) => {
   doorlockdb.query(`DELETE FROM smsservice WHERE createtime="${request.query.createtime}"`)
   doorlockdb.query(`SELECT * FROM smsservice ORDER BY createtime DESC LIMIT 10`, function(error, result, fields){
      response.send(SMSServiceHome.html(result,'삭제'));
   });
});

router.get('/test', (request, response) => {

}); 
module.exports = router;
