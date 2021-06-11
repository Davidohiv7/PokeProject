const passport = require('passport')
const passportJwt = require('passport-jwt')
const ExtractJwt = passportJwt.ExtractJwt
const StrategyJwt = passportJwt.Strategy

const { User } =  require('../db/db')

const { SECRET_KEY_JWT } = process.env

passport.use(
    new StrategyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: SECRET_KEY_JWT
    }, async (jwtPayload, done) => {
        try {
            const user = await User.findOne({where: {id: jwtPayload.id}})
            return done(null, user)
        } catch (error) {
            return done(error)
        }
        
    })
)