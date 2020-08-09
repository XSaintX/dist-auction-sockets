"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./class/server"));
var router_1 = __importDefault(require("./routes/router"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var server = server_1.default.instance;
//bodyparser middleware
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(morgan_1.default("dev"));
server.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
//cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/', router_1.default); //aqui mandas desde la ruta principal a hacer uso de subrutas, para que de lo de anngular mas tienes que ponerlo que tu ruta sea desde /api por ejemplo  y no oocupar /
server.start();
