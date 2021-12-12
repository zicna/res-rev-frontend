const defState = {
  restaurants: [],
};

const restaurantReducer = (state = defState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      console.log("inside reducer");
      return {
        ...state,
        restaurants: action.payload,
      };
    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload],
      };
      case "DELETE_RESTAURANT":
        const newRestaurants = state.restaurants.filter(res => res.id !== action.payload)
        return{
          ...state,
          restaurants: newRestaurants
        }
    default:
      console.log("inside default");

      return state;
  }
};
export default restaurantReducer;
