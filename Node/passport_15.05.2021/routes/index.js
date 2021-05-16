const express = require('express');
const router = express.Router();
const passport = require('passport');

function auth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/login');
  }
}

router.get('/', (req, res) => {
  res.send('home page');
});
  
router.get('/login', (req, res) => {
  res.render('index');
});
  
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))
  
router.get('/admin', auth, (req, res) => {
  console.log('route/req session >>>', req.session);
  res.send('admin page');
});
  
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;