import React from 'react';
import TransactionsLog from './TransactionsLog.jsx';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import { Container, Row, Col } from 'react-grid-system';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionAmt: '',
      transactionType: '',
      transactionDesc: '',
      transactionDate: '',
      transactions: []
    }
    this.handleTransactionType = this.handleTransactionType.bind(this);
    this.handleAddToTotal = this.handleAddToTotal.bind(this);
    this.handleTransactionAmt = this.handleTransactionAmt.bind(this);
    this.handleTransactionDesc = this.handleTransactionDesc.bind(this);
    this.handleTransactionDate = this.handleTransactionDate.bind(this);
  }

  // handleChange(event, index, value) {
  //   this.setState({
  //     value: value
  //   });
  // }

  cleanInput() {
    this.setState({
      transactionAmt: '',
      transactionType: '',
      transactionDesc: '',
    })
  }

  handleTransactionDesc(e) {
    this.setState({
      transactionDesc: e.target.value
    })
  }

  handleTransactionDate(e, value) {
    this.setState({
      transactionDate: value.toString().split(' ').slice(1, 4).join(' ')
    })
  }

  handleTransactionType(e, index, value) {
    this.setState({
      transactionType: value
    })
  }

  handleTransactionAmt(e) {
    this.setState({
      transactionAmt: Number(e.target.value)
    })
  }

  handleAddToTotal() {
    let copy = this.state.transactions;
    copy.push([this.state.transactionDate, this.state.transactionDesc, this.state.transactionAmt, this.state.transactionType]);
    this.props.handleAddTransaction(this.state.transactionAmt, this.state.transactionType);
    this.setState({
      transactions: copy
    })
    this.cleanInput();
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={3}>
              <DatePicker
                autoOk
                hintText="Enter Transaction Date"
                mode="landscape"
                onChange={this.handleTransactionDate}
              />
            </Col>
            <Col md={3}>
              <TextField
                hintText="Enter Transaction Description"
                onChange={this.handleTransactionDesc}
                value={this.state.transactionDesc}
              />
            </Col>
            <Col md={3}>
              <TextField
                hintText="Enter Total Amount (ex. 100)"
                onChange={this.handleTransactionAmt}
                value={this.state.transactionAmt}
              />
            </Col>
            <Col md={2}>
              <SelectField
                value={this.state.transactionType}
                onChange={this.handleTransactionType}
                hintText="Income or Expense"
              >
                <MenuItem value={"Income"} primaryText="Income"></MenuItem>
                <MenuItem value={"Expense"} primaryText="Expense"></MenuItem>
              </SelectField>
            </Col>
            <Col md={1}>
              <ContentAdd
                style={{marginTop: '15%'}}
                onClick={this.handleAddToTotal}
              >
              </ContentAdd>
            </Col>
          </Row>
        </Container>
        <TransactionsLog transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default Transaction;
