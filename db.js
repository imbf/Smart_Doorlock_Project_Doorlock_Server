const mysql = require('mysql');

module.exports.mobiusdb = mysql.createConnection({
   host : 'localhost',
   port : 3306,
   user : 'root',
   password: '1111',
   database: 'mobiusdb',
});

module.exports.doorlockdb = mysql.createConnection({
   host : 'localhost',
   port : 3306,
   user : 'root',
   password: '1111',
   database: 'doorlockdb',
   dateStrings: 'date', 
})
