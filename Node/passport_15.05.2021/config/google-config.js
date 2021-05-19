var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Profile = require('../model/Profiles/index.js');

passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async(accessToken, refreshToken, profile, done) => {
    const newUser = {
      googleId: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      strategy: profile.provider
    }
    try {
      let user = await  Profile.findOne({ googleId: profile.id })
      if (user) {
        done(null, user)
      } else {
        user = await Profile.create(newUser);
        done(null, user);
      }
    } catch (err) {
      console.log(err);
    }
  }
));