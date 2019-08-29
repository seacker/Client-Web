import React, {useState, useEffect} from 'react'
import TimePicker from 'react-bootstrap-time-picker'
import {Container, Row, Col, Table, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchMeeting } from '../stores/actions'

function MeetingRoom(props){
    // const [time]
    const [time, setTime] = useState(0)
    const [gendTime, setGETime] = useState(0)
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [meetingNow, setMeetingNow] = useState([])

    useEffect(() => {
        props.fetchMeeting()
        console.log(props.fetchMeeting(), "ini apa hasilnya? ini di useeffect")

        if (!localStorage.getItem('token')) {
            props.history.push('/')
        }

    }, [])

    function getDate(value){
        // console.log(new Date(value), "ini datenya")
        setDate(value)
        console.log(props.meeting, "ini jadwal meeting")
        const data = props.meeting.data

        const filter = []
        data.forEach(schedule => {
            // console.log(schedule.date.substring(0, 10) === value, "ini schedule")
            if(schedule.date.substring(0, 10) === value){
                filter.push(schedule)
            }
        })
        setMeetingNow(filter)
    }
    // console.log(meetingNow, "ini jadwal yang sama")

    function convert(convertTime){
        let h = Math.floor(convertTime / 3600);
        let m = Math.floor(convertTime % 3600 / 60);

        var stringHour, stringMinute
            if(h < 10){
                stringHour="0"+h
            } else {
                stringHour = h
            } 
            if(m < 10){
                stringMinute="0"+m
            } else {
                stringMinute = m
            }
        console.log(h, m, "ini hasil convert")
        console.log(`${stringHour}:${stringMinute}`)
        var dateString = `${stringHour}:${stringMinute}`

        return dateString
    }
    
    function getTime(time){
        console.log(time, "ini valuenyaaaa")
        setTime(time)
        const timeString = convert(time)
        console.log(timeString)
        setStartTime(timeString)
    }

    function getEndTime(gendTime){
        console.log(gendTime, "ini gendTime")
        setGETime(gendTime)
        const converted = convert(gendTime)
        console.log(converted)
        setEndTime(converted)
    }
    return (
        <Container fluid>
            <Row className ="paddingPage">
                <Col md="5">
                    {/* ini ntar dijadiin component aja tablenya nop, thx */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
                <Col md="7">
                    <div>
                        <Form>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" onChange={(e) =>  getDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Start Time</Form.Label>
                            <TimePicker onChange={getTime} value={time}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>End Time</Form.Label>
                            <TimePicker onChange={getEndTime} value={gendTime} />
                        </Form.Group>
                        <div>
                            <img src={require('../image/meetingRoom.PNG')} alt="meeting room picture" width="700px"/>
                        </div>
                        <div>
                            <button className="btn-custom" type="submit">Submit</button>
                        </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const mapStatetoProps = state => {
    return {
        ...state
    }
}

const mapDispatchtoProps = { fetchMeeting }

export default connect(mapStatetoProps, mapDispatchtoProps)(MeetingRoom)