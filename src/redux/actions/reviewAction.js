const ADD_REVIEW = "ADD_REVIEW"

const reviewURL = "http://localhost:3001/reviews"

export const addReview = (reviewObject) => {
    return (dispatch) => {
        fetch(reviewURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(reviewObject)
        } )
        .then(response => response.json())
        .then(data => {
            dispatch({type: ADD_REVIEW, payload: data})
        })
    }
}