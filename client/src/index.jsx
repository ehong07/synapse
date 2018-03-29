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
      totalSavingsMarch: 0,
      totalExpensesMarch: 0,
      totalSavingsApril: 0,
      totalExpensesApril: 0,
      totalSavingsMay: 0,
      totalExpensesMay: 0
    }
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleTransferSavings = this.handleTransferSavings.bind(this);
  }

  componentDidMount() {
    this.handleAddUser();
  }

  handleAddUser() {
    $.ajax({
      url: '/createUser',
      method: 'POST',
      success: () => {
        console.log('ADD USER SUCCESS');
        this.handleAddNode();
      },
      error: err => {
        console.log('ADD USER ERROR: ' + err);
      }
    })
  }

  handleAddNode() {
    $.ajax({
      url: '/createNode',
      method: 'POST',
      success: () => {
        console.log('ADD NODE SUCCESS');
      },
      error: err => {
        console.log('ADD NODE ERROR: ' + err);
      }
    })
  }

  handleAddTransaction(amt, type, month) {
    if (type === 'Income' && month.includes('Mar')) {
      this.setState({
        totalSavingsMarch: this.state.totalSavingsMarch + amt
      })
    } else if (type === 'Expense' && month.includes('Mar')) {
      this.setState({
        totalExpensesMarch: this.state.totalExpensesMarch + amt
      })
    } else if (type === 'Income' && month.includes('Apr')) {
      this.setState({
        totalSavingsApril: this.state.totalSavingsApril + amt
      })
    } else if (type === 'Expense' && month.includes('Apr')) {
      this.setState({
        totalExpensesApril: this.state.totalExpensesApril + amt
      })
    } else if (type === 'Income' && month.includes('May')) {
      this.setState({
        totalSavingsMay: this.state.totalSavingsMay + amt
      })
    } else if (type === 'Expense' && month.includes('May')) {
      this.setState({
        totalExpensesMay: this.state.totalExpensesMay + amt
      })
    }
  }

  handleTransferSavings() {
    let totalSavings = this.state.totalSavingsMarch + this.state.totalSavingsApril + this.state.totalSavingsMay;

    $.ajax({
      url: '/transferSavings',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({totalSavings}),
      success: () => {
        console.log('TRANSFER SAVINGS SUCCESS');
        this.setState({
          totalSavingsMarch: 0,
          totalSavingsApril: 0,
          totalSavingsMay: 0
        })
      },
      error: err => {
        console.log('TRANSFER SAVINGS ERROR: ' + err);
      }
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="SynapseVI"
            showMenuIconButton={false}
          />
          <Toolbar>
            <ToolbarTitle
              text="Transaction Log"
            />
          </Toolbar>
          <br></br>
          <Transaction
            handleAddTransaction={this.handleAddTransaction}
          />
          <br></br>
          <Total
            savings={this.state.totalSavingsMarch + this.state.totalSavingsApril + this.state.totalSavingsMay}
            expenses={this.state.totalExpensesMarch + this.state.totalExpensesApril + this.state.totalExpensesMay}
          />
          <br></br>
          <Graph
            savingsMarch={this.state.totalSavingsMarch}
            expensesMarch={this.state.totalExpensesMarch}
            savingsApril={this.state.totalSavingsApril}
            expensesApril={this.state.totalExpensesApril}
            savingsMay={this.state.totalSavingsMay}
            expensesMay={this.state.totalExpensesMay}
          />
          <br></br>
          <br></br>
          <Paper
            zDepth={1}
            style={{position: 'fixed', bottom: '0', width: '100%'}}
          >
            <BottomNavigation
              selectedIndex={this.state.selectedIndex}
            >
              <BottomNavigationItem
                label="Transfer Savings"
                icon={transferIcon}
                onClick={this.handleTransferSavings}
              />
              <BottomNavigationItem
                label="Recents"
                icon={recentsIcon}
              />
              <BottomNavigationItem
                label="Favorites"
                icon={favoritesIcon}
              />
            </BottomNavigation>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
