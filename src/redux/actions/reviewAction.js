const ADD_REVIEW = 'ADD_REVIEW'
const DELETE_REVIEW = 'DELETE_REVIEW'
const EDIT_REVIEW = "EDIT_REVIEW"

const reviewURL = 'http://localhost:3001/reviews'

export const addReview = (reviewObject) => {
  return (dispatch) => {
    fetch(reviewURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reviewObject),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ADD_REVIEW, payload: data })
      })
  }
}

export const deleteReview = (id) => {
  return (dispatch) => {
    fetch(`${reviewURL}/${id}`, { method: 'DELETE' })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        dispatch({ type: DELETE_REVIEW, payload: data })
      })
  }
}

export const editReview = (reviewObject) => {
  return(dispatch) => {
    debugger
    fetch(`${reviewURL}/${reviewObject.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reviewObject)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      debugger
      dispatch({type: EDIT_REVIEW, payload: data})
    })
  }
}