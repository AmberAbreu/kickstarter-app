"use strict";
exports.__esModule = true;
exports.jwt = void 0;
exports.jwt = require("jsonwebtoken");
var createError = require("http-errors");
require("dotenv").config();
var accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
module.exports = {
    signAccessToken: function (payload) {
        return new Promise(function (resolve, reject) {
            exports.jwt.sign({ payload: payload }, accessTokenSecret, {}, function (err, token) {
                if (err) {
                    reject(createError.InternalServerError());
                }
                resolve(token);
            });
        });
    },
    verifyAccessToken: function (token) {
        return new Promise(function (resolve, reject) {
            exports.jwt.verify(token, accessTokenSecret, function (err, payload) {
                if (err) {
                    var message = err.name == "JsonWebTokenError" ? "Unauthorized" : err.message;
                    return reject(createError.Unauthorized(message));
                }
                resolve(payload);
            });
        });
    }
};
//# sourceMappingURL=jwt.js.map