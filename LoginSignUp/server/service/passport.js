const User = require('../models/user_model');
const config = require('../config');
const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStretegy = require('passport-local');


const localLoginForUser = new LocalStretegy({ usernameField: 'userName' }, function (userName, password, done) {

    User.findOne({ userName: userName }, function (err, user) {
        if (err) { return done(err); }
        if (user) {
            console.log(password)
            user.compareUserPassword(password, function (err, isMatch) {
                if (err) { return done(err); }
                if (isMatch) { return done(null, user) }
            });
        } else {
            return done(null, false);
        }
    })
});


passport.use('local-user', localLoginForUser);