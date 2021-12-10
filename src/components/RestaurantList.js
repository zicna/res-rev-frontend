import React, { Component } from 'react'

import RestaurantCard from './RestaurantCard'
import RestaurantForm from './RestaurantForm'



export default class RestaurantList extends Component {
    constructor(props){
        super(props)
        this.state = {
            newRestaurant: false,
            toggleForm: () => this.toggleForm()
        }
    }
    toggleForm = () => {
        this.setState(prevState => ({
            newRestaurant: !prevState
        }
        ))
    }

    handleNewResClick = () => {
        console.log('hello')
        this.setState({
            newRestaurant: true
        })
    }
    render() {
        return (
            <div>
                {this.state.newRestaurant ? 
                    < RestaurantForm toggleForm={this.state.toggleForm}/> : 
                    <button 
                        onClick={this.handleNewResClick}>
                        Add new restaurant
                    </button>}
                {this.props.restaurants.map(res => {
                    return (
                    <div>
                        <p key={res.id}>{res.name}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Show</button>
                    </div>
                    )})}


                
            </div>
        )
    }
}
