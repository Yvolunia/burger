var mysql = require('mysql');
var key = require('./key.js');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: key.mysql.user,
    password: key.mysql.password,
    database: 'uam75vznfduumauk'
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.

connection.connect();
module.exports = connection;