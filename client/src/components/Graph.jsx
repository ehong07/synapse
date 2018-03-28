import React from 'react';
import {BarChart} from 'react-easy-chart';

// class Graph extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     }
//   }
//
//   render() {
//     let data = [
//       {x: 'Jan. Savings', y: this.props.savings},
//       {x: 'Jan. Expenses', y: this.props.expenses},
//       {x: 'Feb. Savings', y: 0},
//       {x: 'Feb. Expenses', y: 0},
//       {x: 'Mar. Savings', y: 125},
//       {x: 'Mar. Expenses', y: 150},
//     ];
//
//     return (
//       <div style={{display: 'flex', justifyContent: 'center'}}>
//         <BarChart
//           height={500}
//           width={750}
//           axes
//           colorBars
//           data={data}
//         />
//       </div>
//     )
//   }
// }

const Graph = props => {
  let data = [
    {x: 'March Savings', y: props.savings},
    {x: 'March Expenses', y: props.expenses},
    {x: 'April Savings', y: 0},
    {x: 'April Expenses', y: 0},
    {x: 'May Savings', y: 0},
    {x: 'May Expenses', y: 0},
  ];

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <BarChart
        height={500}
        width={750}
        axes
        colorBars
        data={data}
      />
    </div>
  )
}

export default Graph;
