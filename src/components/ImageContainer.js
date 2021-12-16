import React, { Component } from 'react'

export default class ImageContainer extends Component {
    render() {
        return (
            <div className='card'>
                <img classname='card'src={this.props.image} alt={this.props.name} />
            </div>
        )
    }
}
