const express = require('express');
const app = express();
const models = require("./models/")
const {User, Device, UserDevice} = models

app.use(express.json());

app.get('/', (req, resp) => {
    resp.send('OK, funcionou!')
});

app.get('/devices', (req, resp) => {
    Device.findAll(req.params).then(devices => {
        resp.json(devices)
    })
})

app.get('/devices/:id', (req, resp) => {
    Device.findByPk(req.params.id).then(dev => {
        resp.send(dev.dataValues)
    })
})

app.post('/devices', (req, resp) => {
    Device.create(req.body).then(dev => {
        resp.send(dev.dataValues);
    })
});

app.post('/user', (req, resp) => {
    User.create(req.body).then(use => {
        resp.send(use.dataValues);
    })
});

app.listen(3030, () => {
    console.log('Funcionando!');
});