
const User = require('../models/user_model');

const config = require('../config');



module.exports = {
    userSignUp(req, res, next) {

        
        console.log(req.body)

        const userName = req.body.userName;
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.send({ message: "You must provide Id and password" })
        }

        //see if a user with the given email exist   
        User.findOne({ email: email }, function (err, existingUser) {
            if (err) { return next(err) }
            // if doesnot exist
            if (existingUser) {
                return res.send({ message: "This Email is Already Register" })
            }
            //if email does not exist , create new user
            const user = new User({
                userName: userName,
                email: email,
                password: password
            })
            console.log(user)
            user.save(function (err) {
                if (err) { return next(err) }
                //repond to request indicating the user was created
                res.json({
                    // user: user,
                    // token: config.tokenForUser(user),
                    message: "SignUp Successfull"
                })

            })
        })

    },


    signIn(req, res, next) {

        res.send({
            message: "Login SuccesFull",
            user: req.user,
            token: config.tokenForUser(req.user)
        })

    }
}
