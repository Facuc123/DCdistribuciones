const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const userRouter = require('./router/userRouter');

const DB = 'DCdistribuciones';
mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8080);
app.use('/api', userRouter);
console.log("Servidor escuchando en puerto 8080");