const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const dotenv = require('dotenv');
const SynapsePay = require('synapsepay');

dotenv.config();

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;

const client = new Clients(
  // client id should be stored as an environment variable
  process.env.CLIENT_ID,
  // client secret should be stored as an environment variable
  process.env.CLIENT_SECRET,
  // is_production boolean determines sandbox or production endpoints used
  false
);

app.post('/user', (req, res) => {

});

app.post('/node', (req, res) => {

});

app.post('/transaction', (req, res) => {

});

app.get('/users', (req, res) => {
  // console.log('HERE');
  // res.send();
  const Users = SynapsePay.Users;

  let options = {
    ip_address: Helpers.getUserIP(),
    page: '', //optional
    per_page: '', //optional
    query: '' //optional
  };

  Users.get(
    client,
    options,
    (err, usersResponse) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.send(usersResponse.users);
      }
    }
  )
});

app.get('/transactions', (req, res) => {
  console.log('WE MADE IT');
  // const Transactions = SynapsePay.Transactions;
  // let transactions;
  // Transactions.get(
  //   node,
  //   null,
  //   (err, transactionsResp) => {
  //     if (err) {
  //       res.sendStatus(400);
  //     } else {
  //       transactions = transactionsResp;
  //     }
  //   }
  // )
  // res.json(transactions);
  res.send();
});

app.listen(8000, () => {
  console.log('listening on port 8000!');
});
