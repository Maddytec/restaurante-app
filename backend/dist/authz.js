"use strict";
exports.__esModule = true;
var api_config_1 = require("./api-config");
var jwt = require("jsonwebtoken");
exports.handleAuthorization = function (request, response, next) {
    var token = verificarToken(request);
    if (!token) {
        response.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
        response.status(401).json({ message: 'Você precisa se autenticar.' });
    }
    else {
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                response.status(403).json({ message: 'Não autorizado.' });
            }
        });
    }
};
function verificarToken(request) {
    var token = undefined;
    if (request.headers && request.headers.authorization) {
        // Authorization: Bearer xxx.xxx.xxx
        var partes = request.headers.authorization.split(' ');
        if (partes.length === 2 && partes[0] === 'Bearer') {
            token = partes[1];
        }
    }
    return token;
}
