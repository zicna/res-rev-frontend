const reviewReducer = (state, action) => {
    switch(action.type){
        case "ADD_REVIEW":
            return {
                ...state,
                restaurants:[
                    ...state.restaurants,
                    reviews: [...state.restaurants.reviews]
                ]
            }
        default:
            return state
    }
    
    
}