const passport = require('passport');
const localStrategy = require('./strategy');


const getAccess = (req, res, next) => {
  passport.authenticate('local', { successRedirect: '/admin', failureRedirect: '/login', failureFlash: true }) 
  (req, res, next);
}


module.exports = {
  getAccess,
};