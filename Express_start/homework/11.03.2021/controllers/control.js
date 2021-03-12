const Cars = require('../model/Cars');

const getIndexPage = async(req, res) => {
  res.render('index', { cars: [] });
} 

const getTable = async(req, res) => {
  const carEntries = await Cars.getAllCars();
  res.render('index', { cars: carEntries });
} 

const getFilTable = async(req, res) => {
  const carEntries = await Cars.getFilCars();
  res.render('index', { cars: carEntries });
} 

module.exports = {
  getIndexPage,
  getFilTable,
  getTable,
}