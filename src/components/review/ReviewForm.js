import React, { Component } from 'react'

export default class ReviewForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            content:'',
            mark:''
        }
    }
    render() {
        return (
            <div>
                Helllo from review form
            </div>
        )
    }
}
