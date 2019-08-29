import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../components/formLogin.js'

const landingPage = (props) => {
    return (
        <div className="bgLanding">
            <div className="formposition">
                <Form />
            </div>
            {/* <div className="landingPage">
                <h3>Hallo this is landingPage</h3>
            </div> */}
        </div>
    )
}

const mapState = (state) => {
    return {
        ...state
    }
}
const mapDispatch = {}

export default connect(mapState, mapDispatch)(landingPage)