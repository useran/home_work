const Users = require('../model/Users/index.js');

const getIndex = (req, res) => {
  res.render('index');
};

const getLogin = (req, res) => {
  res.render('login', { logged: req.isAuthenticated() });
};

const getRegister = (req, res) => {
  res.render('register', { logged: req.isAuthenticated() });
};

const registerFunc = async(req, res) => {
  req.body.strategy = 'localStrategy';
  try {
    await Users.createUser(req.body);
    res.redirect('/login')
  } catch (error) {
    res.redirect('/register')
  }
};

const getAdmin = (req, res) => {
  res.render('admin', { name: req.user.name ? req.user.name : req.user.firstName });
};



module.exports = {
  getIndex,
  getLogin,
  getRegister,
  registerFunc,
  getAdmin,
}

