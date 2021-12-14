const defState = {
  restaurants: [],
}

const restaurantReducer = (state = defState, action) => {
  switch (action.type) {
    case 'GET_RESTAURANTS':
      return {
        ...state,
        restaurants: action.payload,
      }
    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload],
      }
    case 'DELETE_RESTAURANT':
      const newRestaurants = state.restaurants.filter(
        (res) => res.id !== action.payload
      )
      return {
        ...state,
        restaurants: newRestaurants,
      }
    case 'ADD_REVIEW':
      debugger
      const restaurantIndex = state.restaurants.findIndex((res) => res.id === action.payload.id)
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          state.restaurants[restaurantIndex].reviews.push(action.payload),
        ],
      }
    default:
      return state
  }
}
export default restaurantReducer
