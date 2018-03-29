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
        res.sendStatus(400)
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
        res.sendStatus(400)
      }
    }
  );
})

app.post('/transferSavings', (req, res) => {
  const Transactions = SynapsePay.Transactions;

  // Create a Transaction
  const createTransactionPayload = {
    to: {
      type: 'PERSONAL',
      id: nodes[0].json._id
    },
    amount: {
      amount: Number(req.body.totalSavings),
      currency: 'USD'
    },
    extra: {
      supp_id: '1283764wqwsdd34wd13212',
      note: 'Deposit to bank account',
      webhook: 'http://requestb.in/q94kxtq9',
      process_on: 1,
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
        res.sendStatus(400)
      }
    }
  );
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
