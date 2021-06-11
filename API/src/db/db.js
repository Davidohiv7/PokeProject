var { Sequelize } = require('sequelize');
const user = require('../models/User')

require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT,DB_NAME } = process.env

var db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: console.log('Pokemon database connection established'),
});

const User = user(db)


module.exports = {
    User,
    conn: db   
};
  