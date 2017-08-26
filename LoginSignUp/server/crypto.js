const crypto = require('crypto');
algorithm = 'aes-256-ctr';
password= 'd6F3feq';


module.exports = {
    encrypt : function encrypt(text){
        var cipher = crypto.createCipher(algorithm, password);
        var crypted = cipher.update(text , 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },
    

    decrypt: function decrypt(next){
        var decipher = crypto.createDecipher(algorithm, password);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}