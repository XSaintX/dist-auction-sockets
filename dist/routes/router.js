"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var server_1 = __importDefault(require("../class/server"));
var environment_1 = require("../global/environment");
var environment_2 = require("../global/environment");
var router = express_1.Router();
router.get('/productlist', function (req, res) {
    res.json(environment_1.productlistz.getProductList());
});
router.post('/updatestate', function (req, res) {
    var sku = req.body.sku;
    var bidding = req.body.bidding;
    environment_1.productlistz.updatestate(sku, bidding);
    var server = server_1.default.instance;
    server.io.emit('change-state', environment_1.productlistz.getProductList());
    server.io.emit('auction-products', environment_1.productlistz.ListItemsAuction());
    res.json(environment_1.productlistz.getProductList());
});
router.get('/checklogged', function (req, res) {
    res.json(environment_2.usersConnected.getLogged());
});
router.get('/auctionlist', function (req, res) {
    res.json(environment_1.productlistz.ListItemsAuction());
});
router.post('/checkifexists', function (req, res) {
    var username = req.body.username;
    res.json(environment_2.usersConnected.checkifexists(username));
});
router.post('/logout', function (req, res) {
    var username = req.body.username;
    environment_2.usersConnected.delete(username);
    var server = server_1.default.instance;
    if (username == 'admin') {
        server.io.emit('auction-products', environment_1.productlistz.finished());
    }
});
router.get('/users', function (req, res) {
    var server = server_1.default.instance;
    server.io.clients(function (err, clients) {
        if (err) {
            return res.json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            clients: clients
        });
    });
});
exports.default = router;
