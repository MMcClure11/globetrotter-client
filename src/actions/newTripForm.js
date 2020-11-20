//syncronous action creators

export const updateNewTripForm = (name, value) => {
  return {
    type: 'UPDATE_NEW_TRIP_FORM',
    formData: { name, value }
  }
}