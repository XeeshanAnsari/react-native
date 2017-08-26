const UserController = require('../controllers/user_controller');;

const passportService = require('../service/passport')
const passport = require('passport')

const requireUserSignIn = passport.authenticate('local-user', { session: false })


module.exports = (app) => {

    app.post('/api/userSignup', UserController.userSignUp);
    app.post('/api/userSignIn', requireUserSignIn, UserController.signIn);
}