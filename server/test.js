const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : 'Node1234!',
  database : 'travel'
});

connection.connect();

connection.query('SELECT * from member', (error, rows, fields) => {
    if (error) {
        console.log(error);
    }
    console.log('User info is: ', rows);
});

connection.end();