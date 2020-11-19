//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  } 
}

//asynchronous action creators
export const login = (credentials, history) => {
  console.log("credentials are:", credentials)
  return dispatch => {
    //add loading current user...
    //recommends putting fetches into another folder, like in an adaptor pattern, but it is another layer of abstraction
    return fetch("http://localhost:3000/api/v1/login", {
      // credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({usernmae: "Meks", password: "password"})
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          history.push('/')
        }
      })
      .catch(console.log)
  }
}