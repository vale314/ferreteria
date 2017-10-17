'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var isProduction = process.env.NODE_ENV == 'production ';

exports.default = function () {
    if (!isProduction) {

        return 'eval-source-map';
    }

    return 'eval';
};