const mysql = require('mysql2/promise');
const config = require('../config/db');

const pushQueryToDB = async(qr, ...inputArr) => {
  const connection = await mysql.createConnection(config);
  const [rows, fields] = await connection.execute(qr, inputArr);
  connection.end();
  return rows;
}

module.exports = {
  pushQueryToDB,
}

