import React, { Component } from 'react';
import {connect} from 'react-redux'


const landingPage = () => {

}

const mapState = (state) => {
    return {
        ...state
    }
}
const mapDispatch = {}

export default connect(mapState, mapDispatch)(landingPage)