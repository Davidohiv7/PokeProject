var { DataTypes } = require('sequelize');
const { hashPassword } = require('../utils/userHooks')

module.exports = (db) => {
    return db.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        hooks: {
            beforeValidate: async (user) => {
                if(user.password) {
                    const hash = await hashPassword(user)
                    user.password = hash
                }
                
            }
        }
    });
}
