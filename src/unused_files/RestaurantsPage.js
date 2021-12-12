// // ! this component will be used for:
// // ! 1. connect to Redux
// // ! 3. Render RestaurantList Component with restaurants passed from props after connecting to redux

// import React, { Component } from 'react'

// import { connect } from 'react-redux'
// import { getRestaurants } from '../redux/actions/restaurantAction'
// import RestaurantList from '../components/RestaurantList'


// class RestaurantsPage extends Component {

//     componentDidMount(){
//         this.props.dispatchSetRestaurants()
//     }

    
//     render (){
//         return (
//             <div>
//                 <RestaurantList {...this.props}/>
//             </div>
//         )
//     }
    
// }
// const mapStateToProps = (state) => {
//     return {
//       ...state.restaurants
//     }
//   }
// const mapDispatchToProps = (dispatch) => {
//     return {
//       dispatchSetRestaurants: () => dispatch(getRestaurants())
//     }
//   }
  
//   export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsPage);
  
