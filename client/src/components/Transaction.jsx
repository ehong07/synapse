import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import { Container, Row, Col } from 'react-grid-system';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={3}><DatePicker hintText="Enter Date" mode="landscape" /></Col>
            <Col md={3}><TextField hintText="Enter Description" /></Col>
            <Col md={3}><TextField hintText="Enter Amount (ex. 100)" /></Col>
            <Col md={2}>
              <DropDownMenu style={{marginTop: '-5%'}}>
                <MenuItem primaryText="Income"></MenuItem>
                <MenuItem primaryText="Expense"></MenuItem>
              </DropDownMenu>
            </Col>
            <Col md={1}>
              <ContentAdd style={{marginTop: '15%'}} ></ContentAdd>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Transaction;
