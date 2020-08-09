"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productlist = exports.getUsers = exports.configureUser = exports.auctionstartsocket = exports.disconnect = exports.connectClient = exports.initial = exports.initialcounter = void 0;
var socket_io_1 = __importDefault(require("socket.io"));
var user_1 = require("../class/user");
var counter_1 = require("../class/counter");
var counterdown_1 = require("../class/counterdown");
var environment_1 = require("../global/environment");
var environment_2 = require("../global/environment");
exports.initialcounter = new counterdown_1.CounterDown();
exports.initial = new counter_1.Counter();
var decrease = false;
exports.connectClient = function (client, io) {
    var user = new user_1.User(client.id);
    environment_2.usersConnected.add(user);
};
exports.disconnect = function (client, io) {
    client.on('disconnect', function () {
        environment_2.usersConnected.deleteUser(client.id);
        io.emit('active-users', environment_2.usersConnected.getList());
    });
};
exports.auctionstartsocket = function (client, io) {
    client.on('auctionstartsocket', function (payload) {
        environment_1.productlistz.bidding();
        environment_2.usersConnected.increasepoints(payload.from);
        io.emit('active-users', environment_2.usersConnected.getOrderedList());
        io.emit('auction-products', environment_1.productlistz.ListItemsAuction());
        exports.initialcounter.reboot();
        if (!decrease) {
            doEverySecond(io);
        }
    });
};
var doEverySecond = function (io) {
    decrease = true;
    var win = setInterval(function () {
        console.log(exports.initialcounter.result());
        exports.initialcounter.decrease();
        io.emit('counter', exports.initialcounter.result());
        if (Number(exports.initialcounter.result()) === 0) {
            decrease = false;
            exports.initialcounter.restart();
            io.emit('counter', environment_2.usersConnected.getOrderedList()[0].username + " WON!!");
            environment_1.productlistz.sold(environment_2.usersConnected.getOrderedList()[0].username);
            environment_2.usersConnected.resetall();
            setTimeout(function () {
                io.emit('change-state', environment_1.productlistz.getProductList());
                io.emit('active-users', environment_2.usersConnected.getOrderedList());
                io.emit('auction-products', environment_1.productlistz.ListItemsAuction());
            }, 10000);
            clearInterval(win);
        }
    }, 1000);
};
exports.configureUser = function (client, io) {
    client.on('configure-user', function (payload, callback) {
        environment_2.usersConnected.updateName(client.id, payload.name);
        io.emit('active-users', environment_2.usersConnected.getList());
        callback({
            ok: true,
            mensaje: "user " + payload.name + " configured"
        });
    });
};
exports.getUsers = function (client, io) {
    client.on('get-users', function () {
        io.to(client.id).emit('active-users', environment_2.usersConnected.getList());
    });
};
exports.productlist = function (client, io) {
    client.on('productlist', function () {
        io.emit('productlist-get', environment_1.productlistz.ListItemsAuction());
    });
};
exports.default = socket_io_1.default;
