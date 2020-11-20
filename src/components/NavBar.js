import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import Login from './Login'


//
const NavBar = ({ currentUser}) => {
  return (
    <div className="NavBar">
      { currentUser ? <p>Welcome, {currentUser.attributes.name} from {currentUser.attributes.hometown.city}.</p> : ''}
      {/* <button>Login</button>
      OR
      <button>Sign Up</button> */}
      {/* { currentUser ? <Logout /> : <Login /> } */}
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
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)