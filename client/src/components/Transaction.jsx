import React from 'react';
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
      transactionType: ''
    }
    this.handleTransactionType = this.handleTransactionType.bind(this);
    this.handleAddToTotal = this.handleAddToTotal.bind(this);
    this.handleTransactionAmt = this.handleTransactionAmt.bind(this);
  }

  // handleChange(event, index, value) {
  //   this.setState({
  //     value: value
  //   });
  // }

  cleanInput() {
    this.setState({
      transactionAmt: '',
      transactionType: ''
    })
  }

  handleTransactionType(event, index, value) {
    this.setState({
      transactionType: value
    })
  }

  handleTransactionAmt(event) {
    this.setState({
      transactionAmt: Number(event.target.value)
    })
  }

  handleAddToTotal() {
    this.props.handleAddTransaction(this.state.transactionAmt, this.state.transactionType);
    this.cleanInput();
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={3}><DatePicker hintText="Enter Transation Date" mode="landscape" /></Col>
            <Col md={3}><TextField hintText="Enter Transaction Description" /></Col>
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
      </div>
    )
  }
}

export default Transaction;
