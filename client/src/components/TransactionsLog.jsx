import React from 'react';
import TransactionsLogEntry from './TransactionsLogEntry.jsx';

const TransactionsLog = props => (
  <div>
    {props.transactions.map((transaction, key) => <TransactionsLogEntry transaction={transaction} key={key}/>)}
  </div>
)

export default TransactionsLog;
