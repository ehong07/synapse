import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><RaisedButton label="Total Savings: $1000" primary={true} /></Col>
          <Col><RaisedButton label="Total Expenses: $500" secondary={true} /></Col>
        </Row>
      </Container>
    )
  }
}

export default Total;
