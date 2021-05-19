const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../model/Users/index.js');
const Profile = require('../model/Profiles/index.js');

let strategy = '';

passport.serializeUser(function(user, done) {
  strategy = user.strategy;
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  if (strategy) {
    Profile.findById(id, (err, user) => {
      done(err, user);
    })
  } else {
    Users.findById(id, (err, user) => {
      done(err, user);
    })
  }
})

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, 
  async (email, password, done) => {
    const userDB = await Users.findByEmail(email);
    const user = new Users({ email: email, password: password });
    if (userDB){
      return user.checkForPassLog(userDB) ? done(null, userDB) : done(null, false);
    }
  })
)