const mysql = require('mysql2/promise');
const config = require('../config/db');

const getAllCars = async() => {
  try {
    const connection = await mysql.createConnection(config);
    const qr = 'SELECT make, model FROM cars';
    const [rows, fields] = await connection.execute(qr);
    connection.end();
    return rows;

  } catch (err) {
      console.log('>>>err', err)
    }
}

const getFilCars = async() => {
  try {
    const connection = await mysql.createConnection(config);
    const qr = 'SELECT * FROM cars where year >= 2004 and year <= 2007';
    const [rows, fields] = await connection.execute(qr);
    connection.end();
    return rows;

    } catch (err) {
        console.log('>>>err', err)
      }
}

module.exports = {
    getAllCars,
    getFilCars,
}

