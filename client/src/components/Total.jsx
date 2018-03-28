import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';

const Total = props => (
  <Container>
    <Row>
      <Col>
        <RaisedButton
          label="Total Savings:"
          labelStyle={{fontSize: '125%'}}
          disabled={true}
          disabledBackgroundColor={'rgb(0, 188, 212)'}
          disabledLabelColor={'white'}
          style={{display: 'flex', justifyContent: 'center'}}
        />
      </Col>
      <Col>
        <RaisedButton
          label="Total Expenses:"
          labelStyle={{fontSize: '125%'}}
          disabled={true}
          disabledBackgroundColor={'rgb(255, 64, 129)'}
          disabledLabelColor={'white'}
          style={{display: 'flex', justifyContent: 'center'}}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <div style={{fontFamily: 'Arial', fontSize: '200%', color: 'rgb(0, 188, 212)', display: 'flex', justifyContent: 'center'}}>
          ${props.savings}
        </div>
      </Col>
      <Col>
        <div style={{fontFamily: 'Arial', fontSize: '200%', color: 'rgb(255, 64, 129)', display: 'flex', justifyContent: 'center'}}>
          ${props.expenses}
        </div>
      </Col>
    </Row>
  </Container>
)

export default Total;
