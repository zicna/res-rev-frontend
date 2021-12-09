import React, { Component } from 'react'

export default class ImageContainer extends Component {
    constructor(props){
        super(props)

    }
    render() {
    console.log(`${this.props.image}`)

        return (
            <div>
                <img src={this.props.image} alt="restaurant image" />
            </div>
        )
    }
}
