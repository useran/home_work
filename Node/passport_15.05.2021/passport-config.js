const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./model/Users/index.js');


passport.serializeUser(function(user, done) {
  console.log('serialize >>>', user),
  done(null, user.id);
})

passport.deserializeUser(async function(id, done) {
  console.log('deserialize >>>', id);
  const userDB = await Users.findById(id);
  userDB ? done(null, userDB) : done(null, false);
})


passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, 
  async function(email, password, done) {
    const userDB = await Users.findByEmail(email);
    const user = new Users({ email: email, password: password });
    if (userDB){
      return user.checkForPassLog(userDB) ? done(null, userDB) : done(null, false);
    }
  })
)