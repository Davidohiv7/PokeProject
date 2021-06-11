const express = require('express')
const passport = require('passport')

const profileRouter = express.Router();


profileRouter.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //En el middleware de passport, cuando la autenticacion es correcta, devuelve el usuario que se autentico, con este podria
    //renderizar
    res.send(req.user)
})
  

module.exports = profileRouter