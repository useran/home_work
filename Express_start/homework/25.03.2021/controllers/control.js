const Cars = require('../model/Cars');

const getSth = async(req, res) => {
  res.send(req.body.message);
} 

module.exports = {
  getSth,
}