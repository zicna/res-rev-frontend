import React, { Component } from 'react'
import RatingSelect from './RatingSelect'
import { connect } from 'react-redux'

class ReviewEditForm extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.review.id,
            content: this.props.review.content,
            mark: this.props.review.mark,
            restaurant_id: this.props.review.restaurant_id
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

    
        console.log('submiting from edit form')
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    render() {
        return (
          <div className="card">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <h2>How would you rate {this.props.restaurant.name} restaurant?</h2>
                <RatingSelect setRating={this.setRating} />
                <div className="input-group">
                  <input
                    type="textarea"
                    rows="4"
                    cols="50"
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    required
                    autoFocus
                    placeholder="Write a review"
                  />
                  <input className="btn btn-secondary" type="submit" value="Send" />
                </div>
              </fieldset>
            </form>
          </div>
        )
      }
}

const mapPropsToState = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(ReviewEditForm)
