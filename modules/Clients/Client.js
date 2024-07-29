"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Client = /** @class */ (function () {
    function Client(name, cpf, address, bornDate, state, city) {
        this._address = address;
        this._bornDate = bornDate;
        this._clientID = (0, uuid_1.v4)();
        this._name = name;
        this._cpf = cpf;
        this._state = state;
        this._city = city;
    }
    return Client;
}());
exports.default = Client;
