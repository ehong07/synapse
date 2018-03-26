const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8000, () => {
  console.log('listening on port 8000!');
});
