const mysql = require('mysql');

module.exports.mobiusdb = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password: '111111',
   database: 'mobiusdb',
});

module.exports.doorlockdb = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password: '111111',
   database: 'doorlockdb',
   dateStrings: 'date', 
});

//TEST
module.exports.db = mysql.createConnection({
   host : '168.131.35.103',
   password: '1111',
   user : 'root',
   database : 'hi'
})
