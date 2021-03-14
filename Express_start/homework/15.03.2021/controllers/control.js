const Cars = require('../model/Cars');
const queryForAllCars = 'SELECT * FROM cars';

const getCars = async(req, res) => {
  const qr = 'SELECT * FROM cars where year >= ? and year <= ?';
  const carEntries = await Cars.pushQueryToDB(`${qr}`, `${req.body.from}`, `${req.body.to}`);
  res.send(carEntries);
} 

const addCars = async(req, res) => {
  const qr = 'INSERT INTO cars(make, model, year) values (?,?,?)';
  await Cars.pushQueryToDB(`${qr}`, `${req.body.make}`, `${req.body.model}`, `${req.body.year}`);
  const outRes = await Cars.pushQueryToDB(`${queryForAllCars}`);
  res.send(outRes);
} 

const deleteCars = async(req, res) => {
  const qr = 'DELETE FROM cars WHERE id = ?';
  await Cars.pushQueryToDB(`${qr}`, `${req.body.id}`);
  const outRes = await Cars.pushQueryToDB(`${queryForAllCars}`);
  res.send(outRes);
} 

module.exports = {
  getCars,
  addCars,
  deleteCars,
}