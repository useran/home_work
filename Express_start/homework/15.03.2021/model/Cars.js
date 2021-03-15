const mysql = require('mysql2/promise');
const config = require('../config/db');

const getAllCars = async() => {
  const connection = await mysql.createConnection(config);
  const qr = 'SELECT * FROM cars';
  const [rows, fields] = await connection.execute(qr);
  connection.end();
  return rows;
}

const FilterCars = async(from, to) => {
  const connection = await mysql.createConnection(config);
  const qr = 'SELECT * FROM cars where year >= ? and year <= ?';
  const [rows, fields] = await connection.execute(qr, [from, to]);
  connection.end();
  return rows;
}

const addNewCars = async(make, model, year) => {
  const connection = await mysql.createConnection(config);
  const qr = 'INSERT INTO cars(make, model, year) values (?,?,?)';
  const [rows, fields] = await connection.execute(qr, [make, model, year]);
  connection.end();
  return rows;
}

const deleteCars = async(id) => {
  const connection = await mysql.createConnection(config);
  const qr = 'DELETE FROM cars WHERE id = ?';
  const [rows, fields] = await connection.execute(qr, [id]);
  connection.end();
  return rows;
}

module.exports = {
    FilterCars,
    addNewCars,
    getAllCars,
    deleteCars,
}

