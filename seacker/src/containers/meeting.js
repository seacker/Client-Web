import React, {useState, useEffect} from 'react'
import TimePicker from 'react-bootstrap-time-picker'
import {Container, Row, Col, Table, Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchMeeting, bookMeeting } from '../stores/actions'

function MeetingRoom(props){
    // const [time]
    const [time, setTime] = useState(0)
    const [gendTime, setGETime] = useState(0)
    const [date, setDate] = useState('')
    const [startBook, setStartTime] = useState('')
    const [endBook, setEndTime] = useState('')
    const [meetingNow, setMeetingNow] = useState([])
    const [color1, setColor1] = useState('green')
    const [color2, setColor2] = useState('green')
    const [color3, setColor3] = useState('green')
    const [color4, setColor4] = useState('green')
    const [rooms, setRooms] = useState(null)

    useEffect(() => {
        props.fetchMeeting()

        if (!localStorage.getItem('token')) {
            props.history.push('/')
        }

    }, [])

    function getDate(value){
        // console.log(new Date(value), "ini datenya")
        setDate(value)
        const data = props.meeting.data

        const filter = []
        data.forEach(schedule => {
            // console.log(schedule.date, "halo")
            console.log(schedule.date.substring(0, 10) === value, "ini schedule")
            if(schedule.date.substring(0,10) === value){
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
        var dateString = `${stringHour}:${stringMinute}`

        return dateString
    }
    
    function getTime(time){
        setTime(time)
        const timeString = convert(time)
        setStartTime(timeString)
    }

    function getEndTime(gendTime){
        setGETime(gendTime)
        const converted = convert(gendTime)
        setEndTime(converted)
    }

    const [colorA, setColorA] = useState(false)
    const [colorB, setColorB] = useState(false)
    const [colorC, setColorC] = useState(false)
    const [colorD, setColorD] = useState(false)

    function changeColor1(){
        setColor1('black')
        setColorA(true)
        if(color1 === 'black'){
            setColorA(false)
            setColor1('green')
            
        }
    }
    function changeColor2(){
        setColor2('black')
        setColorB(true)
        if(color2 === 'black'){
            setColorB(false)
            setColor2('green')
            
        }
    }
    function changeColor3(){
        setColor3('black')
        setColorC(true)
        if(color3 === 'black'){
            setColorC(false)
            setColor3('green')
        }
    }
    function changeColor4(){
        setColor4('black')
        setColorD(true)
        if(color4 === 'black'){
            setColorD(false)
            setColor4('green')
        }
    }

    function saveRoom(){
        console.log('masuk save room')
        const arr = []
        colorA && (arr.push('A'))
        colorB && (arr.push('B'))
        colorC && (arr.push('C'))
        colorD && (arr.push('D'))
        if(colorA === true || colorB === true || colorC === true || colorD === true){
            setRooms(arr)
        }

        props.bookMeeting({
            arrRooms: rooms,
            startBook,
            endBook,
            date
        })
    }

    useEffect(()=> {
        
    },[rooms])

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
                                <Button style={{
                                    position: 'absolute', left: 104, top: 330, zIndex: 1,
                                    width: 40, height: 100, backgroundColor: color1
                                }}
                                    key='A' onClick={()=>
                                        changeColor1()}
                                ></Button> 
                                <Button style={{
                                    position: 'absolute', left: 263, top: 330, zIndex: 1,
                                    width: 40, height: 100, backgroundColor: color2
                                }}
                                    key='B' onClick={()=>changeColor2()}
                                ></Button>
                                <Button style={{
                                    position: 'absolute', left: 432, top: 330, zIndex: 1,
                                    width: 40, height: 100, backgroundColor: color3
                                }}
                                    key='C' onClick={()=>changeColor3()}
                                ></Button>
                                <Button style={{
                                    position: 'absolute', left: 581, top: 330, zIndex: 1,
                                    width: 40, height: 100, backgroundColor: color4
                                }}
                                    key='D' onClick={()=>changeColor4()}
                                ></Button>
                        </div>
                        <div>
                            <button className="btn-custom" type="submit" onClick={ () => saveRoom()}>Submit</button>
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

const mapDispatchtoProps = { fetchMeeting, bookMeeting }

export default connect(mapStatetoProps, mapDispatchtoProps)(MeetingRoom)