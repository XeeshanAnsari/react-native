const jwt = require('jwt-simple')
module.exports = {

    secrets: "dsf90432jrEDFS32094dsf32AW",
    tokenForUser: function (user) {
        const timeStamp = new Date().getTime();
        return jwt.encode({ sub: user.userName, iat: timeStamp }, this.secrets)
    },
}