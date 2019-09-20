const express = require('express');
const app = express();
const path = require('path');
const static = require('serve-static');
const Mrequest = require('request');
const bodyParser = require('body-parser');

const passwordRouter = require('./routes/password.js');
const SMSServiceRouter = require('./routes/SMSService.js');
const mobiusdb = require('./db').mobiusdb;
const home = require('./views/home');

// 전구 숫자 표시하는 Number
var bulbNumber=0;

app.use('/public', static(path.join(__dirname,'public')));
// init시 초기 LED 설정
var options = {
    url: 'http://168.131.35.103:7579/Mobius/LEDGroup/update',
    method:'POST',
    headers:{
        'Accept': 'application/json',
        'X-M2M-RI': 12345,
        'X-M2M-Origin': 'JongJin',
        'Content-Type': 'applicatipon/vnd.onem2m-res+json;ty=4'
    },
    body:{
        "m2m:cin":{
            "con":"15"
        }
    },
    json:true
}
Mrequest(options);


app.get('/', (request,response) => { // => 는 변수를 생성하고 무명함수를 변수에 담을 때 사용하는 문법
    //response.send(homeTemplate.html(pmWeather));
    //test
    mobiusdb.query(`SELECT * FROM cin WHERE pi='/Mobius/LEDGroup/update' ORDER BY ri DESC LIMIT 1`,function(error,result,fields){
        bulbNumber=result[0].con;
        
    })
    response.send(home.html(bulbNumber));
});

app.use('/password', passwordRouter);
app.use('/SMSService', SMSServiceRouter);

app.listen(3000, () => {   
    console.log('3000번 포트에서 스마트 도어락 서버가 대기중입니다.');
});
