const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const isAuth = require('../controllers/auth/isAuth');


router.get('/', controller.getIndex);
  
router.get('/login', controller.getLogin);

router.get('/register', controller.getRegister);

router.post('/register', controller.registerFunc);

router.get('/admin', isAuth, controller.getAdmin);



module.exports = router;