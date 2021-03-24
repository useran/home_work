const mysql = require('mysql2/promise');
const config = require('../config/db');

const getPurchaseList = async() => {
  const connection = await mysql.createConnection(config);
  const qr = 'SELECT * FROM onsoldstate';
  const [rows, fields] = await connection.execute(qr);
  connection.end();
  return rows;
}

module.exports = {
    getPurchaseList,
}

