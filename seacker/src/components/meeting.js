import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
// import { connect } from 'react-redux'

function MeetingRoom (props) {
    return(
        <>
        <Button style={{
            position: 'absolute', left: 1063, top: 208, zIndex: 1,
            width: '5px', height: '7px', padding: 10, backgroundColor: 'green'}}
        >
        </Button>
        <Button style={{
            position: 'absolute', left: 1135, top: 208, zIndex: 1,
            width: '5px', height: '7px', padding: 10, backgroundColor: 'green'}}
        >
        </Button>
        <Button style={{
            position: 'absolute', left: 1211, top: 208, zIndex: 1,
            width: '5px', height: '7px', padding: 10, backgroundColor: 'green'}}
        >
        </Button>
        <Button style={{
            position: 'absolute', left: 1280, top: 208, zIndex: 1,
            width: '5px', height: '7px', padding: 10, backgroundColor: 'green'}}
        >
        </Button>
        </>
    )
}

// export default connect()(MeetingRoom)
export default MeetingRoom