const Cars = require('../model/Cars');

const getCars = async(req, res) => {
  const carEntries = await Cars.FilterCars(req.body.from, req.body.to);
  res.send(carEntries);
} 

const addCars = async(req, res) => {
  await Cars.addNewCars(req.body.make, req.body.model, req.body.year);
  const outRes = await Cars.getAllCars();
  res.send(outRes);
} 

const deleteCars = async(req, res) => {
  await Cars.deleteCars(req.body.data);
  const outRes = await Cars.getAllCars();
  res.send(outRes);
} 

const updateCars = async(req, res) => {
  await Cars.updCars(req.body.make, req.body.model, req.body.year, req.body.id);
  const outRes = await Cars.getAllCars();
  res.send(outRes);
} 

module.exports = {
  getCars,
  addCars,
  deleteCars,
  updateCars,
}