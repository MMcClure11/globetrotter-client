import React from 'react'
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        GlobeTrotter
        {this.props.loggedIn ? <Logout /> : <Login />}
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
