const bcrypt = require('bcrypt')


async function hashPassword(user) {
    const saltRounds = 10;
    return bcrypt.hashSync(user.password, saltRounds);
}

module.exports = {
    hashPassword
}