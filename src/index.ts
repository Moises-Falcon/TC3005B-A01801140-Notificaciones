import Server from "./provider/Server";
import {PORT,NODE_ENV} from './config';
import express from 'express';
import cors from 'cors';

//Importar controllers
import ClienteController from "./controllers/ClienteController";
import NotificacionController from "./controllers/NotificacionController";
 //Integrar el proyecto

 const server:Server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        ClienteController.instance,
        NotificacionController.instance
    ]
 });
 server.init();