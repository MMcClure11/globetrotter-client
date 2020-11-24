const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_TRIPS":
      return action.trips
      case "ADD_TRIP":
      return state.concat(action.trip)
      case "CLEAR_TRIPS":
        return initialState
      case "UPDATE_TRIP":
        return state.map(trip => trip.id === action.trip.id ? action.trip : trip)
      case "DELETE_TRIP":
        return state.filter(trip => trip.id === action.tripId ? false : true)
    default:
      return state
  }
}