import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'
import restaurantReducer from './reducers/restaurantReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store