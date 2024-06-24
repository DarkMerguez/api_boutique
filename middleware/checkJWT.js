const jwt = require("jsonwebtoken");

function checkJwt(role) {
    return (request, response, next) => {
        const token = request.cookie.token;

        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                response.status(401).json("Unauthorized,wrong token");
                return;
            }
            if (role == decodedToken.role) {
                next();
            }
            else {
                response.status(401).json("Unauthorized,role");
            }
        })
    }
}

module.exports = checkJwt;