// const reviewReducer = (state, action) => {
//     debugger
//     switch(action.type){
//         case "ADD_REVIEW":
//             const restaurantIndex = state.restaurants.findIndex(res => res.id === action.payload.id)
//             return {
//                 ...state,
//                 restaurants:[
//                     ...state.restaurants,
//                     state.restaurants[restaurantIndex].reviews.push(action.payload)
//                 ]
//             }
//         default:
//             return state
//     }
// }