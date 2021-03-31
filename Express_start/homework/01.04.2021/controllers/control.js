const Users = require('../model/Users/index.js');

const getUsers = async(req, res) => {
  const data = await Users.find({});
  res.render('index', { users: data });
} 

const addNewUser = async(req, res) => {
  const newUser = new Users(req.body);
  await newUser.save();
  const dataOut = await Users.find({}, {__v:0});
  res.send(dataOut);
}

const deleteUser = async(req, res) => {
  const id = req.body.data;
  await Users.findByIdAndDelete(id);
  const dataOut = await Users.find({}, {__v:0});
  res.send(dataOut);
}

const getUserForUpd = async(req, res) => {
  const id = req.body.data;
  const user = await Users.findById(id);
  res.send(user);
}

const updateUser = async(req, res) => {
  await Users.findByIdAndUpdate({_id: req.body.id}, req.body);
  const dataOut = await Users.find({}, {__v:0});
  res.send(dataOut);
}

module.exports = {
  getUsers,
  addNewUser,
  updateUser,
  deleteUser,
  getUserForUpd
}