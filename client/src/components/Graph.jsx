import React from 'react';
import {BarChart} from 'react-easy-chart';

const Graph = props => {
  let data = [
    {x: 'March Savings', y: props.savingsMarch},
    {x: 'March Expenses', y: props.expensesMarch},
    {x: 'April Savings', y: props.savingsApril},
    {x: 'April Expenses', y: props.expensesApril},
    {x: 'May Savings', y: props.savingsMay},
    {x: 'May Expenses', y: props.expensesMay},
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
