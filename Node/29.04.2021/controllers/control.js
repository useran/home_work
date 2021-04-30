const jwt = require('jsonwebtoken');
const axios = require('axios');

const getIndex = async(req, res) => {
  res.render('index')
} 

const prepData = (req, res) => {
  const token = jwt.sign({ id: 'user0000' }, `${req.body.passw_l}`);
  const data = { token: token, passw: req.body.passw_r };
  axios.post(req.body.url, data)
    .then(r => res.send(r.data.message))
    .catch(err => console.log(err))
} 

const processData = (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, `${req.body.passw}`);
    res.send({ message: 'Data received' });
  } catch(err) {
    res.send({ message: 'Data rejected' });
  }
} 

module.exports = {
  getIndex,
  prepData,
  processData
}