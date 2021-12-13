import React, { Component } from 'react'

export default class ImageContainer extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="restaurant image" />
            </div>
        )
    }
}
