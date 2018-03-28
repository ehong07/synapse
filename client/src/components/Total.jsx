import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';

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
          <Col>
            <RaisedButton label="Total Savings: $1000" disabled={true} disabledBackgroundColor={'rgb(0, 188, 212)'} disabledLabelColor={'white'} />
          </Col>
          <Col><RaisedButton label="Total Expenses: $500" disabled={true} disabledBackgroundColor={'rgb(255, 64, 129)'} disabledLabelColor={'white'} /></Col>
        </Row>
        <Row>
          <Col>
            <IconButton tooltip="bottom-center" tooltipPosition="bottom-center">
              <ContentSend></ContentSend>
            </IconButton>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Total;
