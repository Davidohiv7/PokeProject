const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signInRouter = express.Router();

const { SECRET_KEY_JWT } = process.env

const { User } =  require('../db/db')

signInRouter.get('/', (req, res, next) => {
    res.send('Esta es la ruta de sign in')
})
  
signInRouter.post('/', async (req, res, next) => {
    const { email, password} = req.body
    const userExistCheck = await User.findOne({ where: { email }})
    if(!userExistCheck) {
        return res.json({message: 'The email or the password does not match'}) 
    }
    const match = await bcrypt.compare(password, userExistCheck.password);
    if(!match) {
        return res.json({message: 'The email or the password does not match'}) 
    }
    const jasonWebToken = jwt.sign({id: userExistCheck.id, username: userExistCheck.username}, SECRET_KEY_JWT)
    res.json({message: 'Successful log in', token: jasonWebToken})
})


module.exports = signInRouter