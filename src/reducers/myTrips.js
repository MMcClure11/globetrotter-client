const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_TRIPS":
      return action.trips
      case "ADD_TRIP":
      return action.trips
      case "CLEAR_TRIPS":
        return action.state.concat(action.trip)
    default:
      return state
  }
}