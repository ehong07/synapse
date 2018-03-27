import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import { Container, Row, Col } from 'react-grid-system';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col><DatePicker hintText="Enter Date" mode="landscape" /></Col>
            <Col><TextField hintText="Enter Amount" /></Col>
            <Col>
              <DropDownMenu>
                <MenuItem primaryText="Income" />
                <MenuItem primaryText="Expense" />
              </DropDownMenu>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Transaction;
