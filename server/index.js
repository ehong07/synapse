const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(8000, () => {
  console.log('listening on port 8000!');
});
