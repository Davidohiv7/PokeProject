const express = require('express')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken')
const signUpRouter = express.Router();

require('dotenv').config();
const { SECRET_KEY_JWT } = process.env


const { User } =  require('../db/db')

signUpRouter.get('/', (req, res, next) => {
    res.send('Esta es la ruta de sign up')
})
  
signUpRouter.post('/', async (req, res, next) => {
    const newUserData = req.body
    try {
        const checkedUser = await User.findOne({where: {
            email: newUserData.email
            }
        })
        if(checkedUser) {
            return res.send({message: 'This email is already taken'})
        }
        const newUser = await User.create({
            ...newUserData,
            id: uuidv4()
        })
        const jasonWebToken = jwt.sign({id: newUser.id, username: newUser.username}, SECRET_KEY_JWT)
        res.json({message: `User ${newUserData.username} was successfully created`, token: jasonWebToken})
    } catch (error) {
        next(error)
    }
})


module.exports = signUpRouter