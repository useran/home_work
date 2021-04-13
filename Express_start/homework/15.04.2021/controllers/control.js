const Users = require('../model/Users/index.js');

const getUsers = async(req, res) => {
  res.render('index');
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
  getUsers,
  findByAge,
  setByAge
}