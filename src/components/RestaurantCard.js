import React, { Component } from 'react'
import ImageContainer from './ImageContainer'

export default class RestaurantCard extends Component {
    render() {
        return (
            <div>
                {this.props.restaurant.name}
                <ImageContainer image={this.props.restaurant.image} />
            </div>
        )
    }
}
