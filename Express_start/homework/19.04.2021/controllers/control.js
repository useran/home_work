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
  const user = await Users.createUser(req.body);
  res.send(user);
} 

const getInSys = async(req, res) => {
  const userFromDB = await Users.findByEmail(req.body.email);
  const user = new Users(req.body);
  if (userFromDB){
    user.checkForPassLog(userFromDB) ? res.send(userFromDB) : res.send(false);
  } else {
    res.send(false);
  }
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