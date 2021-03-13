const mysql = require('mysql2/promise');
const config = require('../config/db');

const getFilCars = async(from, to) => {
  const connection = await mysql.createConnection(config);
  const qr = 'SELECT * FROM cars where year >= ? and year <= ?';;
  const [rows, fields] = await connection.execute(qr, [from, to]);
  connection.end();
  return rows;
}

module.exports = {
    getFilCars,
}

