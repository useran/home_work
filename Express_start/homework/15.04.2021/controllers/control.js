const Users = require('../model/Users/index.js');

const getUsers = async(req, res) => {
  res.render('index');
} 

const getUserBySalary = async(req, res) => {
  const user = await Users.findBySalary(req.body.from, req.body.to);
  user ? res.send(user) : res.sendStatus(400);
}

const addUser = async(req, res) => {
  await Users.addNewUser(req.body);
  const data = await Users.find({}, {__v:0});
  res.send(data);
}

const deleteUserByEmail = async(req, res) => {
  await Users.findByEmailAndDelete(req.body.email);
  const data = await Users.find({}, {__v:0});
  res.send(data);
}

const findByIdUpd = async(req, res) => {
  await Users.findByIdAndUpd(req.body.id, req.body);
  const data = await Users.find({}, {__v:0});
  res.send(data);
}

const findByBirth = async(req, res) => {
  const user = await Users.findByDoB(req.body.from, req.body.to);
  user ? res.send(user) : res.sendStatus(400);
}

const findByAge = async(req, res) => {
  const user = await Users.getUsersByAge(req.body.from, req.body.to);
  user.length !== 0 ? res.send(user) : res.send('Nothing here!');
}

const setByAge = async(req, res) => {
  await Users.setUserDoB(req.body.id, req.body.age);
  const data = await Users.find({}, {__v:0});
  res.send(data);
}


module.exports = {
  getUserBySalary,
  getUsers,
  addUser,
  deleteUserByEmail,
  findByIdUpd,
  findByAge,
  setByAge
}