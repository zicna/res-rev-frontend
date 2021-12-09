const GET_RESTAURANTS = "GET_RESTAURANS";

const resURL = "http://localhost:3001/restaurants";

export const getRestaurants = () => {
  return (dispatch) => {
    fetch(resURL)
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
          dispatch({type: GET_RESTAURANTS, payload: data})
        });
  };
};
