const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const googleAuthRouter = express.Router();

const { SECRET_KEY_JWT } = process.env

googleAuthRouter.get('/signin', passport.authenticate('google', { session: false, scope: ['profile', 'email', 'https://www.googleapis.com/auth/user.addresses.read', 'https://www.googleapis.com/auth/user.phonenumbers.read'] }))


googleAuthRouter.get('/callback', passport.authenticate('google', { 
    session: false, 
    failureRedirect: 'http://localhost:3000/googleAuth/error',
    // successRedirect: 
   }),
    
  (req, res) => {
    const jasonWebToken = jwt.sign({id: req.user.id, username: req.user.username}, SECRET_KEY_JWT)
    res.cookie('jwt', jasonWebToken).redirect('http://localhost:3000/googleAuth/success')
  }
);

module.exports = googleAuthRouter