import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'


//
const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      {/* active toggle is not working */}
      <NavLink exact activeClassName="active" to="/trips"  >My Trips  </NavLink>
      <NavLink exact activeClassName="active" to="/trips/new" >New Trip</NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
    </div>
  )
}

// I an do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
// state = { ...,
//   currentUser: {...}
// }

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)