import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm'
import myTrips from './reducers/myTrips'

import thunk from 'redux-thunk'

//just displaying different syntax options
const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  myTrips
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store