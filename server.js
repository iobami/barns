const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express().use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const dbName = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const url = `mongodb+srv://${user}:${pass}@bambamscluster-9aio3.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(url,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const routes = require('./api/routes/blogRoutes'); //importing route
routes(app);


const port = process.env.PORT || 5000;

app.listen(port);

console.log('RESTful API server started on: ' + port);
