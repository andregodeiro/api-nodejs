import express from 'express';
import devices from './src/controllers/devices.js';

const routes = express.Router();

routes.get("/", (req, resp) => {
    return resp.json({name: "André Godeiro"})
});

routes.get("/devices", devices.findAll);


export {routes as default};