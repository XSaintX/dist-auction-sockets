import Server from './class/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

import path from "path"
import express from "express"
import morgan from "morgan"

const server = Server.instance;
//bodyparser middleware
server.app.use(bodyParser.urlencoded({ extended: true }))
server.app.use(bodyParser.json());

server.app.use(morgan("dev"));
server.app.use(express.static(path.join(__dirname,"public")))
//cors
server.app.use(cors({ origin: true, credentials: true }));
server.app.use('/', router); 
server.start()