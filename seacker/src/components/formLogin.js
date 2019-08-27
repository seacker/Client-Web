import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { loginUser } from '../stores/actions/index.js'
import {Form, Button} from 'react-bootstrap'

function FormLogin(props) {
    const [nik, setNik] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        let user = {nik, password}
        console.log(user)
        props.loginUser(user, props.history)
        e.preventDefault()
    }

    return (
        <div className="formLogin">
            <h5>Login to your Account</h5>
            <Form onSubmit={login}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>NIK</Form.Label>
                <Form.Control type="text" placeholder="CN03xxxx" onChange={(e) => setNik(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="leftButton">
                <button type='submit' className="btn-custom">Login</button>
            </div>
            </Form>
        </div>
    )
}

const mapPropstoState = state => {
    return {
        ...state
    }
}

const mapDispatchtoProps = { loginUser }

export default withRouter(connect(mapPropstoState, mapDispatchtoProps)(FormLogin))