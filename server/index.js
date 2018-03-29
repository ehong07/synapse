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

let user;
let nodes;
let transaction;

app.post('/createUser', (req, res) => {
  const Users = SynapsePay.Users;

  // Create a User
  const createPayload = {
    logins: [
      {
        email: 'javascriptTest@synapsepay.com',
        password: 'test1234',
        read_only: false
      }
    ],
    phone_numbers: [
      '901.111.1111'
    ],
    legal_names: [
      'Node TestUser'
    ],
    extra: {
      note: 'test',
      is_business: false
    }
  };

  Users.create(
    client,
    // fingerprint (specific to user or static for application)
    process.env.FINGERPRINT,
    Helpers.getUserIP(),
    createPayload,
    (err, userResponse) => {
      // error or user object
      user = userResponse;
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(userResponse);
      }
    }
  );
})

app.post('/createNode', (req, res) => {
  const Nodes = SynapsePay.Nodes;

  // Add ACH-US Node through Account and Routing Number Details
  const achPayload = {
    type: 'ACH-US',
    info: {
      nickname: 'Node Library Savings Account',
      name_on_account: 'Node Library',
      account_num: '72347235423',
      routing_num: '051000017',
      type: 'PERSONAL',
      class: 'SAVINGS'
    },
    extra: {
      supp_id: '123sa'
    }
  };

  Nodes.create(
    user,
    achPayload,
    (err, nodesResponse) => {
      // error or node object
      // node will only have RECEIVE permission until verified with micro-deposits
      nodes = nodesResponse;
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(nodesResponse);
      }
    }
  );
})

app.post('/transferSavings', (req, res) => {
  const Transactions = SynapsePay.Transactions;

  // Create a Transaction
  const createTransactionPayload = {
    to: {
      type: 'ACH-US',
      id: nodes[0].json._id
    },
    amount: {
      amount: req.body.totalSavings,
      currency: 'USD'
    },
    extra: {
      ip: Helpers.getUserIP()
    }
  };

  Transactions.create(
    nodes[0],
    createTransactionPayload,
    (err, transactionResp) => {
      // error or transaction object
      transaction = transactionResp;
      if (err) {
        console.log(err.response.text)
        res.status(400).send(err);
      } else {
        res.status(201).send(transactionResp)
      }
    }
  );
});

app.listen(8000, () => {
  console.log('listening on port 8000!');
});
