const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/index');

function auth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/login');
  }
}

router.get('/', controller.getIndex);
  
router.get('/login', controller.getLogin);
  
router.post('/login', passport.authenticate('local', { successRedirect: '/admin', failureRedirect: '/login', failureFlash: true }));

router.get('/register', controller.getRegister);

router.post('/register', controller.registerFunc);

router.get('/admin', auth, controller.getAdmin);
  
router.get('/logout', controller.getLogOut);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), controller.getGoogle);



module.exports = router;