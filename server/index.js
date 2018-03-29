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
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  false
);

let user;
let nodes;
let transaction;

app.post('/createUser', (req, res) => {
  const Users = SynapsePay.Users;

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
    process.env.FINGERPRINT,
    Helpers.getUserIP(),
    createPayload,
    (err, userResponse) => {
      user = userResponse;
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    }
  );
})

app.post('/createNode', (req, res) => {
  const Nodes = SynapsePay.Nodes;

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
      nodes = nodesResponse;
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    }
  );
})

app.post('/transferSavings', (req, res) => {
  const Transactions = SynapsePay.Transactions;

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
      transaction = transactionResp;
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    }
  );
});

app.listen(8000, () => {
  console.log('listening on port 8000!');
});
