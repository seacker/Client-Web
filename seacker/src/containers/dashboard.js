import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchSeats, detailSeat, bookSeat } from '../stores/actions'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

const userId = localStorage.getItem('userid')

function Dashboard(props) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [ID, setId] = useState('')
    const [data, setData] = useState([])
    const [ubah, setUbah] = useState(false)
    const [fetching, setFetch] = useState(true)

    const handleCancel = () => {
        setShow1(false)
        setShow2(false)
    }

    const handleClose = (e) => {
        // console.log(id, 'mau book nih')
        e.preventDefault()
        setShow1(false)
        setShow2(false)
        setUbah(true)
        props.bookSeat(ID, props.history)
    };

    const handleShow = (id) => {
        setShow1(true);
        props.detailSeat(id)
        setId(id)
    }

    const checkout = (id) => {
        setShow2(true);
        props.detailSeat(id)
        setId(id)
    }

    const toMeetingForm = () => {
        props.history.push('/meeting')
    }

    const fetch = () => {
        props.fetchSeats()
    }

    useEffect(() => {
        fetch()
        console.log(props, 'props dash')
        
        console.log(props)
        if (!localStorage.getItem('token')) {
            props.history.push('/')
        }

    },[ubah])

    return (
        <div style={{ marginTop: '30px' }}>
            {   !props.allSeat ? (
                <div>
                    <h2>hallo</h2>
                </div>
            ) : (
                !props.isLoading && props.allSeat.data && (
                    <div>
                        <img src={require("../assets/landingPage.png")} style={{ width: '1350px', height: '625px' }} alt='denah'></img>
                       <Button bsStyle="primary" style={{
                            position: 'absolute', left: 1075, top: 135, zIndex: 1
                        }} onClick={toMeetingForm}
                        > 
                            Booking Meeting Room
                        </Button>
                        {
                            props.allSeat.data.map((pos, index) => (
                                pos.taker ? (
                                    (pos.taker._id === userId) ? (
                                        <>
                                            <Button style={{
                                                position: 'absolute', left: pos.coorX, top: pos.coorY, zIndex: 1,
                                                width: 1, height: 1, margin: 5, padding: 5, backgroundColor: 'purple'
                                            }}
                                                key={index} onClick={() => checkout(pos._id)}
                                            ></Button>
                                            {
                                                        props.seatDetail.detail && props.seatDetail.detail.blockName && (
                                                            <Modal show={show2} onHide={handleCancel} >
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Checking Out</Modal.Title>
                                                                </Modal.Header>
                                                                    <Modal.Body>Do you want to check out???</Modal.Body>
                                                                    <Modal.Footer>
                                                                        <Button variant="secondary" onClick={() => handleCancel()}>
                                                                            Cancel
                                                                        </Button>
                                                                        <Button variant="primary" onClick={(e) => handleClose(e)}>
                                                                            Yes
                                                                        </Button>
                                                                    </Modal.Footer>
                                                            </Modal>
                                                        )
                
                                                }
                                            </> 
                                    ) : (
                                        <Button disabled style={{
                                            position: 'absolute', left: pos.coorX, top: pos.coorY, zIndex: 1,
                                            width: 1, height: 1, margin: 5, padding: 5, backgroundColor: 'red'
                                        }}
                                            key={index} onClick={() => handleShow(pos._id)}
                                        ></Button> 
                                    )
                                ) : (
                                    <>
                                    <Button style={{
                                        position: 'absolute', left: pos.coorX, top: pos.coorY, zIndex: 1,
                                        width: 1, height: 1, margin: 5, padding: 5, backgroundColor: 'green'
                                    }}
                                        key={index} onClick={() => handleShow(pos._id)}
                                        
                                    ></Button>
                                    {
                                            props.seatDetail.detail && props.seatDetail.detail.blockName && (
                                                <Modal show={show1} onHide={handleCancel} >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Booking Seat</Modal.Title>
                                                    </Modal.Header>
                                                        <Modal.Body>Do you want to check in to seat {props.seatDetail.detail.blockName.name}-{props.seatDetail.detail.index}</Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={() => handleCancel()}>
                                                                Close
                                                            </Button>
                                                            <Button variant="primary" onClick={(e) => handleClose(e)}>
                                                            Yes
                                                            </Button>
                                                        </Modal.Footer>
                                                </Modal>
                                            )
    
                                    }
                                    </>
                                )
                            ))
                        }
                    </div>
                )
            )
            }
            

        </div>
    )
}
const mapStateToProps = state => {
    return {
       ...state
    }
}
const mapDispatchToProps = { fetchSeats, detailSeat, bookSeat }

// export default Dashboard
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
