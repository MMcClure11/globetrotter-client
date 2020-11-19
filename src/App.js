import React from 'react'
import './App.css';
import NavBar from './components/NavBar.js'

import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import MainContainer from './components/MainContainer';

class App extends React.Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
