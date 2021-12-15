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
      const restaurantIndex = state.restaurants.findIndex((res) => res.id === action.payload.restaurant_id)
      return {
        restaurants: [
          ...state.restaurants,
          state.restaurants[restaurantIndex].reviews.unshift(action.payload),
        ],
      }
      case 'DELETE_REVIEW':
        const resIndex = state.restaurants.findIndex((res) => res.id === action.payload.restaurant_id)
        let resReviews = [...state.restaurants[resIndex].reviews.filter(review => review.id !== action.payload.id)]
        return{
          restaurants: [
            ...state.restaurants,
            state.restaurants[resIndex].reviews = [...resReviews]
          ]
        }
    default:
      return state
  }
}
export default restaurantReducer
