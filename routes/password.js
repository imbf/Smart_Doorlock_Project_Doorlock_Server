const express = require('express');
const setPasswordPage = require('../views/setPasswordPage');
const { doorlockdb } = require('../db');

const router = express.Router();

router.get('/set', (request, response) => {
   response.send(setPasswordPage.html());
});

router.post('/setpassword', (request, response) => {
   if(request.body.password === request.body.password2){
      doorlockdb.query(`INSERT INTO doorlockdb.password VALUES  (${request.body.password},now());`);
      response.redirect('/');
   }
   else{
      response.send(setPassword.html('오류'));
   }
});


module.exports = router;