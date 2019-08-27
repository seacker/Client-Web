import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

const Dashboard = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div>
            <h3>ini dashboard page</h3>
            <p>{JSON.stringify(props)}</p>
            
        </div>
    )
}

const mapPropstoState = (state) => {
    return {
        ...state
    }
}

const mapDispatchtoProps = {}

export default connect(mapPropstoState, mapDispatchtoProps)(Dashboard)