import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';

// class Total extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     }
//   }
//
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col>
//             <RaisedButton
//               label="Total Savings: $1000"
//               labelStyle={{fontSize: '125%'}}
//               disabled={true}
//               disabledBackgroundColor={'rgb(0, 188, 212)'}
//               disabledLabelColor={'white'}
//
//             />
//           </Col>
//           <Col>
//             <RaisedButton
//               label="Total Expenses: $500"
//               labelStyle={{fontSize: '125%'}}
//               disabled={true}
//               disabledBackgroundColor={'rgb(255, 64, 129)'}
//               disabledLabelColor={'white'}
//             />
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// }

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
          style={{marginLeft: '30%'}}
        />
      </Col>
      <Col>
        <RaisedButton
          label="Total Expenses:"
          labelStyle={{fontSize: '125%'}}
          disabled={true}
          disabledBackgroundColor={'rgb(255, 64, 129)'}
          disabledLabelColor={'white'}
          style={{marginLeft: '20%'}}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <div style={{fontSize: '200%', color: 'rgb(0, 188, 212)', marginLeft: '41%'}}>
          ${props.savings}
        </div>
      </Col>
      <Col>
        <div style={{fontSize: '200%', color: 'rgb(255, 64, 129)', marginLeft: '33%'}}>
          ${props.expenses}
        </div>
      </Col>
    </Row>
  </Container>
)

export default Total;
