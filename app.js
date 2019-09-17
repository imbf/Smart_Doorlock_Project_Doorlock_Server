const express = require('express');
const app = express();
const path = require('path');
const static = require('serve-static');
const Mrequest = require('request');
const bodyParser = require('body-parser');

const passwordRouter = require('./routes/password.js');
const SMSServiceRouter = require('./routes/SMSService.js');

const home = require('./views/home');

app.use('/public', static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (request,response) => { // => 는 변수를 생성하고 무명함수를 변수에 담을 때 사용하는 문법
    //response.send(homeTemplate.html(pmWeather));
    //test
    response.send(home.html());
});
/* 사용하지 않을 Function Page
app.get('/fine_Dust',(request,response) => {
    dustKind='미세먼지';
    response.redirect('/');
});

app.get('/fine_fine_Dust', (request,response) => {
    dustKind='초미세먼지';
    response.redirect('/');
});
*/

app.use('/password', passwordRouter);
app.use('/SMSService', SMSServiceRouter);

app.listen(3000, () => {    //히로쿠에 사이트를 hosting하고 싶으면 PORT 입력
    console.log('3000번 포트에서 스마트 도어락 서버가 대기중입니다.');
});
