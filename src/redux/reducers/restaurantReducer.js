const defState = {
    restaurants: []
}

const restaurantReducer = (state=defState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload
      };
    default:
      return state;
  }
};
export default restaurantReducer
