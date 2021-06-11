const passport = require('passport');
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { User } =  require('../db/db')

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env
const GOOGLE_CALLBACK_URL = 'http://localhost:3001/googleAuth/callback'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, cb) => {

    const phone = await axios.get(`https://people.googleapis.com/v1/people/${profile.id}?personFields=phoneNumbers&access_token=${accessToken}`).catch(e => console.log(e))

    console.log(phone.data)

    const googleUser = {
        id: uuidv4(),
        username: profile.emails[0].value.split('@')[0], 
        email: profile.emails[0].value,
    }

    try {
        const user = await User.findOrCreate({where: { email: profile.emails[0].value}, defaults: googleUser})
        if(user && user[0]) {
            return cb(null, user[0])
        }
    } catch (error) {
        console.log('Error signing Up')
        cb(error, null)
    }
    


}));