"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_PORT = exports.usersConnected = exports.productlistz = void 0;
var product_1 = require("../class/product");
var users_list_1 = require("../class/users-list");
exports.productlistz = new product_1.ProductList();
exports.usersConnected = new users_list_1.UsersList();
exports.SERVER_PORT = Number(process.env.PORT) || 5000;
