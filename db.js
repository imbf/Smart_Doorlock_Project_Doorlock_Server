const mysql = require('mysql');

module.exports.mobiusdb = mysql.createConnection({
   host : '168.131.35.103',
   user : 'root',
   password: '111111',
   database: 'mobiusdb',
});

module.exports.doorlockdb = mysql.createConnection({
   host : '168.131.35.103',
   user : 'root',
   password: '111111',
   database: 'doorlockdb',
   dateStrings: 'date', 
});

