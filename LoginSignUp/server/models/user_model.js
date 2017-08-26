const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('../crypto');


const UserSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6, 'PAssword must be at least 6 characters']
    }
})

UserSchema.pre('save', function(next){
    this.password = crypto.encrypt(this.password);
    next();
});

UserSchema.methods.compareUserPassword = function (requestPassword){
    let isMatch, err;
    if(crypto.decrpt(this.password) === requestPassword){
        isMatch = true;
        err= null;
        callback(err, isMatch);
    }
    else{
        isMatch: false;
        err = "please Enter the correct password";
        callback(err, isMatch);
    }
}


const User = mongoose.model('user', UserSchema);

module.exports = User;