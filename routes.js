import express from 'express';

const routes = express.Router();

routes.get("/", (req, resp) => {
    return resp.json({name: "André Godeiro"})
});

export {routes as default};