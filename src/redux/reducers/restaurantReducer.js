const defState = {
  restaurants: [],
}

const restaurantReducer = (state = defState, action) => {
  switch (action.type) {
    case 'GET_RESTAURANTS':
      return {
        restaurants: action.payload,
      }
    case 'ADD_RESTAURANT':
      return {
        restaurants: [...state.restaurants, action.payload],
      }
    case 'DELETE_RESTAURANT':
      const newRestaurants = [...state.restaurants.filter(
        (res) => res.id !== action.payload
      )]
      return {
        restaurants: newRestaurants,
      }
    case 'ADD_REVIEW':
      const restaurantIndex = state.restaurants.findIndex((res) => res.id === action.payload.id)
      return {
        restaurants: [
          ...state.restaurants.slice(0, restaurantIndex),
            action.payload,
            ...state.restaurants.slice(restaurantIndex + 1)
        ],
      }
      case 'DELETE_REVIEW':
        const resIndex = state.restaurants.findIndex((res) => res.id === action.payload.id)
        return{
          restaurants: [
            ...state.restaurants.slice(0, resIndex),
            action.payload,
            ...state.restaurants.slice(resIndex + 1)
          ]
        }
    default:
      return state
  }
}
export default restaurantReducer
