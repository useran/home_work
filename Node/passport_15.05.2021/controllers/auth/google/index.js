const passport = require('passport');
const googleStrategy = require('./strategy');


const getAccess = (req, res, next) => {
  passport.authenticate('google', { scope: ['profile'] })
  (req, res, next);
}

const getCallback = (req, res, next) => {
  passport.authenticate('google', { failureRedirect: '/login' }, function (err, user) {
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/admin');
    });
  })(req, res, next)
}


module.exports = {
  getAccess,
  getCallback,
};