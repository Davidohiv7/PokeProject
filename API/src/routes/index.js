const { Router } = require('express');
const router = Router();
const signUpRouter = require('./signup')
const signInRouter = require('./signin')
const googleAuthRouter = require('./googleAuth')
const profileRouter = require('./profile')

// Configurar los routers

router.use('/signup', signUpRouter);
router.use('/signin', signInRouter);
router.use('/googleAuth', googleAuthRouter);
router.use('/profile', profileRouter);


module.exports = router;
