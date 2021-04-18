const Users = require('../model/Users/index.js');

const getIndex = async(req, res) => {
  res.render('index');
} 

const getRegister = async(req, res) => {
  res.render('register');
} 

const getLogin = async(req, res) => {
  res.render('login');
}

const addUser = async(req, res) => {
  const newUser = new Users(req.body);
  try {
    await newUser.save();
    res.sendStatus(200)
  } catch(err) {
    res.send(err.message);
  }
} 

const getInSys = async(req, res) => {
  const passLogMatch = await Users.checkForPassLog(req.body.email, req.body.password);
  passLogMatch ? res.send(passLogMatch) : res.send(false);
} 

const getWelcome = async(req, res) => {
  res.render('welcome', { name: req.query.name });
}


module.exports = {
  getIndex,
  getRegister,
  getLogin,
  addUser,
  getInSys,
  getWelcome
}