const express = require('express');
const setPasswordPage = require('../views/passwordPage');
const { doorlockdb } = require('../db');

const router = express.Router();

router.get('/', (request, response) => {
   doorlockdb.query('SELECT password FROM password ORDER BY time DESC LIMIT 1',function(error, result, fields){
      console.log("현재 비밀번호 :" +result[0].password);
      response.send(setPasswordPage.html(result[0].password));
   })
});

router.post('/setPassword', (request, response) => {
      doorlockdb.query(`INSERT INTO password VALUES (${request.body.Password},now());`,function(error, result, fields){
         if(error){
            throw error;
         }
      });
      response.redirect('/');
});


module.exports = router;