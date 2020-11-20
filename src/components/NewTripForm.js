import React from 'react'

const NewTripForm = () => {
const handleChange = () => {}

  return (
    <form>
      <input
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={'name'}
        /><br/>
        <input
          placeholder="start date"
          name="startDate"
          onChange={handleChange}
          value={'startDate'}
        /><br/>
        <input
          placeholder="end date"
          name="endDate"
          onChange={handleChange}
          value={'endDate'}
        /><br/>
        <input
          type="submit"
          value={'editMode' ? "Update Trip" : "Create Trip" }
        />
    </form>
  )
}

export default NewTripForm