import React from 'react';
import TransactionsLogEntry from './TransactionsLogEntry.jsx';

const TransactionsLog = props => (
  <div>
    <div>TransactionsLog is here</div>
    {props.transactions}
    <TransactionsLogEntry />
  </div>
)

export default TransactionsLog;
