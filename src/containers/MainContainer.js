// ! Connect with Redux and pass props to MainLayout

import React, { Component } from 'react'
import RoutesLayout from "./pages/RoutesLayout";

import { connect } from 'react-redux'



class MainContainer extends Component {
    render() {
        return (
            <div>
                <RoutesLayout />
            </div>
        )
    }
}




export default connect()(MainContainer)
