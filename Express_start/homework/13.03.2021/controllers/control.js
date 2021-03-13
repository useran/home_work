const Cars = require('../model/Cars');

const getCars = async(req, res) => {
  const carEntries = await Cars.getFilCars(`${req.body.from}`, `${req.body.to}`);
  res.send(carEntries);
} 

module.exports = {
  getCars,
}