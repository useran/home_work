const State = require('../model/Weather/index.js');

const getUsers = async(req, res) => {
  res.render('index');
} 

const getEntries = async(req, res) => {
  try {
    await State.create(req.body);
    const state = await State.find({});
    const transfData = state.map(el => {
      return { tempK: el.tempKelvin, windS: el.windMPH, rad: el.radZiv, pressure: el.pressMMHg };
    }); 
    res.send(transfData);
  } catch(err) {
    return(err.message);
  }
}

const setEntries = async(req, res) => {
  const state = await State.findOne({ _id: req.body.id });
  state.tempKelvin = req.body.temperature;
  state.windMPH = req.body.windSpeed;
  state.radZiv = req.body.radiation;
  state.pressMMHg = req.body.pressure;
  await State.findByIdAndUpdate(req.body.id, { temperature: state.temperature, windSpeed: state.windSpeed, radiation: state.radiation, pressure: state.pressure });
  const dataOut = await State.find({});
  res.send(dataOut);
}


module.exports = {
  getUsers,
  getEntries,
  setEntries
}