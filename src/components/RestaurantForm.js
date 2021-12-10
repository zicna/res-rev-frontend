import React, { Component } from 'react'

export default class RestaurantForm extends Component {
    constructor(props){
        super(props)
            this.state={
                name: '',
                location: '',
                res_type: '',
                image: '',
                description: ''
            }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // * reset local state after submiting form 
        this.setState({
            name: '',
            location: '',
            res_type: '',
            image: '',
            description: ''
        })
        this.props.toggleForm()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    name='location' 
                    value={this.state.location} 
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    name='res_type' 
                    value={this.state.res_type} 
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    name='image' 
                    value={this.state.image} 
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    name='description' 
                    value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <input 
                    type="submit" 
                    value='Create New Restaurant'
                />

                
            </form>
        )
    }
}
