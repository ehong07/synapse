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
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const recentsIcon = <ActionRestore />;
const favoritesIcon = <ActionFavorite />;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2
    }
  }

  select(index) {
    this.setState({
      selectedIndex: index
    })
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/transactions',
    //   method: 'GET',
    //   success: data => {
    //     console.log('SUCCESS');
    //   },
    //   error: err => {
    //     console.log('ERROR: ', err);
    //   }
    // });
    this.getUsers();
  }

  getUsers() {
    $.ajax({
      url: '/users',
      method: 'GET',
      success: data => {
        console.log('GET USERS SUCCESS');
        console.log('DATA = ', data);
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
          <Toolbar>
            <ToolbarTitle text="Transaction Log" />
          </Toolbar>
          <br></br>
          <Transaction />
          <br></br>
          <Total />
          <br></br>
          <br></br>
          <Graph />
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex} >
              <BottomNavigationItem label="Recents" icon={recentsIcon} onClick={() => this.select(0)} />
              <BottomNavigationItem label="Favorites" icon={favoritesIcon} onClick={() => this.select(1)} />
            </BottomNavigation>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
