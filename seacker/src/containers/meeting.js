import React, {useState, useEffect} from 'react'
import TimePicker from 'react-bootstrap-time-picker'

function MeetingRoom(props){
    // const [time]
    return (
        <div>
            <div className="formMeeting">
                <TimePicker />
            </div>
        </div>
    )
}

export default MeetingRoom