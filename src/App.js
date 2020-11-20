import React from 'react'
import './App.css';
import NavBar from './components/NavBar.js'

import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Logout from './components/Logout'
import Login from './components/Login'
import MyTrips from './components/MyTrips'

class App extends React.Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/my-trips' component={MyTrips}/>
          <MainContainer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
