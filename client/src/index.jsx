import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Graph from './components/Graph.jsx';
import User from './components/User.jsx';
import Node from './components/Node.jsx';
import Transaction from './components/Transaction.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    $.ajax({
      url: '/transactions',
      method: 'GET',
      success: data => {
        console.log('SUCCESS');
      },
      error: err => {
        console.log('ERROR: ', err);
      }
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Synapse" showMenuIconButton={false} />
          <User />
          <Node />
          <Transaction />
          <Graph />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
