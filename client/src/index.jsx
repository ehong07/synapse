import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Graph from './components/Graph.jsx';
import User from './components/User.jsx';
import Total from './components/Total.jsx';
import Transaction from './components/Transaction.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentSend from 'material-ui/svg-icons/content/send';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const recentsIcon = <ActionRestore />;
const favoritesIcon = <ActionFavorite />;
const transferIcon = <ContentSend />;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 3,
      transactions: [],
      totalSavings: 0,
      totalExpenses: 0
    }
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
  }

  // componentDidMount() {
  //   // $.ajax({
  //   //   url: '/transactions',
  //   //   method: 'GET',
  //   //   success: data => {
  //   //     console.log('SUCCESS');
  //   //   },
  //   //   error: err => {
  //   //     console.log('ERROR: ', err);
  //   //   }
  //   // });
  //   // this.getUsers();
  // }

  select(index) {
    this.setState({
      selectedIndex: index
    })
  }

  handleAddTransaction(amt, type) {
    if (type === 'Income') {
      this.setState({
        totalSavings: this.state.totalSavings + amt
      })
    } else {
      this.setState({
        totalExpenses: this.state.totalExpenses + amt
      })
    }
  }

  // getUsers() {
  //   $.ajax({
  //     url: '/users',
  //     method: 'GET',
  //     success: data => {
  //       console.log('GET USERS SUCCESS');
  //       console.log('DATA = ', data);
  //     },
  //     error: err => {
  //       console.log('ERROR: ', err);
  //     }
  //   });
  // }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Synapse" showMenuIconButton={false} />
          <Toolbar>
            <ToolbarTitle text="Transaction Log" />
          </Toolbar>
          <br></br>
          <Transaction handleAddTransaction={this.handleAddTransaction} />
          <br></br>
          <Total savings={this.state.totalSavings} expenses={this.state.totalExpenses} />
          <br></br>
          <br></br>
          <Graph savings={this.state.totalSavings} expenses={this.state.totalExpenses} />
          <br></br>
          <br></br>
          <Paper zDepth={1} style={{position: 'fixed', bottom: '0', width: '100%'}}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem label="Transfer Savings" icon={transferIcon} onClick={() => this.select(0)} />
              <BottomNavigationItem label="Recents" icon={recentsIcon} onClick={() => this.select(1)} />
              <BottomNavigationItem label="Favorites" icon={favoritesIcon} onClick={() => this.select(2)} />
            </BottomNavigation>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
