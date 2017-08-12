const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./route/routes');
const mongoose = require('mongoose');
// mongoose.Promise = global.Promises

mongoose.connect('mongodb://localhost/todoApp', { useMongoClient: true });

app.use(bodyParser.json());
route(app);

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message })
})

module.exports = app;