// * thunk gives us acces to dispatch within action creator

const GET_RESTAURANTS = "GET_RESTAURANTS";
const ADD_RESTAURANT = "ADD_RESTAURANT";

const resURL = "http://localhost:3001/restaurants";

export const getRestaurants = () => {
  return (dispatch) => {
    fetch(resURL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_RESTAURANTS, payload: data });
      });
  };
};

export const addRestaurant = (restaurantObject) => {
  return (dispatch) => {
    fetch(resURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurantObject),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ADD_RESTAURANT, payload: data });
      });
  };
};
