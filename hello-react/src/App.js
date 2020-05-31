import React, { Component } from 'react';

// import Header from './components/Header';
// import Home from './components/Home';
import AccountInfo from './components/accountInfo/index';
import AccountContainer from './components/accountContainer/index';
// import AccountCatogery from './components/accountCatogery'

class App extends Component {
  constructor() {
    super();
    this.state = {
      openAccountInfo: true,
    }
  }

  controlAccoutInfo = value => {
    this.setState({
      openAccountInfo: value
    })
  }

  render() {

    const { openAccountInfo } = this.state;
    return (
      <div className="container">
        <AccountInfo changegeBoxHide={this.controlAccoutInfo} />
        <AccountContainer openAccountInfo={openAccountInfo} />
      </div>
    );
  }
}

export default App;
