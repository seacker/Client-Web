import React from 'react'
import { connect } from 'react-redux'

const Detail = (props) => {
    return (
        <div>
            {/* <img src={require("../image/loading.png")} alt="Loading ... "/> */}
            <h3>ini Detail page</h3>
            <button onClick={props.history.push('/dashboard')}> Back to Dashboard </button>
        </div>
    )
}

export default Detail