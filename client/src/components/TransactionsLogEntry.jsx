import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const TransactionsLogEntry = props => (
  <div>
    <Table>
      <TableBody>
        <TableRow>
          <TableRowColumn
            style={{fontSize: '90%'}}
          >
            {props.transaction.date}
          </TableRowColumn>
          <TableRowColumn
            style={{fontSize: '90%'}}
          >
            {props.transaction.desc}
          </TableRowColumn>
          <TableRowColumn
            style={{fontSize: '90%'}}
          >
            {props.transaction.amt}
          </TableRowColumn>
          <TableRowColumn
            style={{fontSize: '90%'}}
          >
            {props.transaction.type}
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default TransactionsLogEntry
