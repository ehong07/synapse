import React from 'react';
import {BarChart} from 'react-easy-chart';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <BarChart
          colorBars
          data={[
            {x: 'A', y: 20},
            {x: 'B', y: 30},
            {x: 'C', y: 40},
            {x: 'D', y: 20},
            {x: 'E', y: 40},
            {x: 'F', y: 25},
            {x: 'G', y: 5}
          ]}
        />
      </div>
    )
  }
}

export default Graph;
