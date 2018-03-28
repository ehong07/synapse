import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import Divider from 'material-ui/Divider';

// const TransactionsLogEntry = props => (
//   <div>
//     <Divider />
//     <Container>
//       <Row>
//         <Col>
//           {props.transaction.date}
//         </Col>
//         <Col>
//           {props.transaction.desc}
//         </Col>
//         <Col>
//           {props.transaction.amt}
//         </Col>
//         <Col>
//           {props.transaction.type}
//         </Col>
//       </Row>
//     </Container>
//     <Divider />
//   </div>
// )

const TransactionsLogEntry = props => (
  <div>
    <Table>
      <TableBody>
        <TableRow>
          <TableRowColumn style={{fontSize: '90%'}}>{props.transaction.date}</TableRowColumn>
          <TableRowColumn style={{fontSize: '90%'}}>{props.transaction.desc}</TableRowColumn>
          <TableRowColumn style={{fontSize: '90%'}}>{props.transaction.amt}</TableRowColumn>
          <TableRowColumn style={{fontSize: '90%'}}>{props.transaction.type}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default TransactionsLogEntry
