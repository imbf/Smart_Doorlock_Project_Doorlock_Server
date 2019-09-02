const express = require('express');
const setPassword = require('../views/setPassword');
const { doorlockdb } = require('../db');

const router = express.Router();

router.get('/set', (request, response) => {
   response.send(setPassword.html('홈'));
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