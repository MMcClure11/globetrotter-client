import React from 'react'
import { updateNewTripForm } from '../actions/newTripForm'
import { createTrip } from '../actions/myTrips'
import { connect } from 'react-redux'

const NewTripForm = ({formData, updateNewTripForm, createTrip}) => {

  const { name, startDate, endDate } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewTripForm(name, value) //this represents the action creator
  }

  const handleSubmit = event => {
    event.preventDefault()
    createTrip({...formData})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={name}
        /><br/>
        <input
          placeholder="start date"
          name="startDate"
          onChange={handleChange}
          value={startDate}
        /><br/>
        <input
          placeholder="end date"
          name="endDate"
          onChange={handleChange}
          value={endDate}
        /><br/>
        <input
          type="submit"
          value={'editMode' ? "Update Trip" : "Create Trip" }
        />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    formData: state.newTripForm
  }
}
//need this to make it a controlled form

export default connect(mapStateToProps, { updateNewTripForm, createTrip })(NewTripForm)