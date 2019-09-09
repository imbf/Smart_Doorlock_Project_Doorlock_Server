const express = require('express');
const app = express();
const path = require('path');
const static = require('serve-static');
const openAPI = require('./openAPI');
const homeTemplate = require('./views/home.js');
const Mrequest = require('request');
const bodyParser = require('body-parser');
const PORT = process.env.PORT   //히로쿠 사용 포트

const passwordRouter = require('./routes/password.js');
const SMSServiceRouter = require('./routes/SMSService.js');


app.use('/public', static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));

//view를 ejs로 설정하기 위한 Code
app.set('views', __dirname+'/views');
app.set('view engine','ejs');

let dustKind = '미세먼지';

app.get('/', (request,response) => { // => 는 변수를 생성하고 무명함수를 변수에 담을 때 사용하는 문법
    var pmWeather = {
        pm : openAPI.PM,
        weather : openAPI.weather,
        detailWeather : openAPI.detailWeather,
        dustKind : dustKind,
    }
    response.send(homeTemplate.html(pmWeather));
});

app.get('/fine_Dust',(request,response) => {
    dustKind='미세먼지';
    response.redirect('/');
});

app.get('/fine_fine_Dust', (request,response) => {
    dustKind='초미세먼지';
    response.redirect('/');
});

app.get('/DoorLock_Open', (request, response) => {
    const options = {
        uri:'http://168.131.35.103:7579/Mobius/lock/update',
        method: 'POST',
        followRedirect:true,
        maxRedirects:10,
        headers:{
            'Accept': 'application/json',
            'X-M2M-RI': 12345,
            'X-M2M-Origin': 'JongJin',
            'Content-Type': 'application/vnd.onem2m-res+json; ty=4',
        },
        body:{
            "m2m:cin":{
                "con":"123"
            }
        },
        json:true
    }
    Mrequest.post(options,(err,httpResponse,body)=> {
        console.log(httpResponse);
    });
    response.redirect('/');    
});
app.use('/password', passwordRouter);
app.use('/SMSService', SMSServiceRouter);

app.listen(3000, () => {    //히로쿠에 사이트를 hosting하고 싶으면 PORT 입력

    console.log('3000번 포트에서 스마트 도어락 서버가 대기중입니다.');
});
