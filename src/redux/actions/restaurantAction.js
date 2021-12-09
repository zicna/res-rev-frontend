// * thunk gives us acces to dispatch within action creator

const GET_RESTAURANTS = "GET_RESTAURANTS";

const resURL = "http://localhost:3001/restaurants";

export const getRestaurants = () => {
  return (dispatch) => {
    fetch(resURL)
      .then((response) => response.json())
      .then((data) => {
          dispatch({type: GET_RESTAURANTS, payload: data})
        });
  };
};
