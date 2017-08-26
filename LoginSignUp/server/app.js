const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const path = require('path');
mongoose.Promise = global.Promise



mongoose.connect('mongodb://localhost/loginSignup', { useMongoClient: true });

app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, './client/', 'build')));
// app.use(cors)
routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/', 'build', 'index.html'));
});


app.use((err, req, res, next) => {
  console.log(err)
  res.status(422).send({ error: err.message });
})

module.exports = app