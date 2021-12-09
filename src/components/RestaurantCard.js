import React, { Component } from 'react'

export default class RestaurantCard extends Component {
    render() {
        return (
            <div>
                {this.props.restaurant.name}
            </div>
        )
    }
}
