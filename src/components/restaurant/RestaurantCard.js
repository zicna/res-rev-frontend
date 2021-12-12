import React, { Component } from 'react'
import ImageContainer from '../ImageContainer'

export default class RestaurantCard extends Component {
    render() {
        return (
            <div> Hello From Restaurants Card</div>
        )
    }
}

{/* <div className='card mb-3' style={{width: '75%'}}>
                <h3 className='card-header'>{this.props.restaurant.name}</h3>
                <div className='card-body'>
                    <h6 className='card-subtitle text-muted'>{this.props.restaurant.res_type}</h6>
                </div>
                <ImageContainer image={this.props.restaurant.image} />
                <div className='card-body'>
                    <p className="card-text">
                        {this.props.restaurant.description}
                    </p>
                </div>
                <div className='card-body'>
                    Here we will list reviews
                </div>
                <div className='card-body'>
                    <a href="">Link for Edit Restaurant</a>
                    
                    <a href="">Link for delete Restaurant</a>
                </div>

            </div> */}
