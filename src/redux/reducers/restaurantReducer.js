const defState = {
    restaurants: []
}

const restaurantReducer = (state=defState, action) => {

  switch (action.type) {
    
    case "GET_RESTAURANTS":
      console.log('inside reducer')
      return {
        ...state,
        restaurants: action.payload
      };
    default:
      console.log('inside default')

      return state;
  }
};
export default restaurantReducer
