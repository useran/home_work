const express = require('express');
const router = express.Router();
const authStrategy = require('../controllers/auth')
const isAuth = require('../controllers/auth/isAuth');


router.post('/login', authStrategy.authLocal.getAccess);

router.get('/logout', isAuth, authStrategy.getLogOut);

router.get('/google', authStrategy.authGoogle.getAccess);

router.get('/google/callback', authStrategy.authGoogle.getCallback);



module.exports = router;