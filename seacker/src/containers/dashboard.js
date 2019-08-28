import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchSeats, detailSeat, bookSeat } from '../stores/actions'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

function Dashboard(props) {
    const [show, setShow] = useState(false);
    const [ID, setId] = useState('')
    const [data, setData] = useState([])

    const handleClose = (id) => {
        // console.log(id, 'mau book nih')
        // e.preventDefault()
        setShow(false)
        props.bookSeat(id)
    };

    const handleShow = (id) => {
        setShow(true);
        props.detailSeat(id)
        setId(id)
    }

    const fetch = () => {
        props.fetchSeats()
    }

    useEffect(() => {
        fetch()
        console.log(props)
        if (!localStorage.getItem('token')) {
            props.history.push('/')
        }

    },[])

    return (
        <div style={{ marginTop: '30px' }}>
            {
                !props.allSeat.isLoading && props.allSeat.data && (
                    <div>
                        <img src={require("../assets/landingPage.png")} style={{ width: '1350px', height: '625px' }} alt='denah'></img>
                        {
                            props.allSeat.data.map((pos, index) => (
                                <>
                                <Button style={{
                                    position: 'absolute', left: pos.coorX, top: pos.coorY, zIndex: 1,
                                    width: 1, height: 1, margin: 5, padding: 5, backgroundColor: 'green'
                                }}
                                    key={index} onClick={() => handleShow(pos._id)}
                                ></Button>
                                {
                                    props.seatDetail.isLoading ? (
                                        <div></div>
                                    ) : (
                                        props.seatDetail.detail && props.seatDetail.detail.blockName && (
                                            <Modal show={show} onHide={handleClose} >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Booking Seat</Modal.Title>
                                                </Modal.Header>
                                                    <Modal.Body>Do you want to check in to seat {props.seatDetail.detail.blockName.name}-{props.seatDetail.detail.index}</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={(e) => handleClose(e)}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={() => handleClose(props.seatDetail.detail._id)}>
                                                        Yes
                                                        </Button>
                                                    </Modal.Footer>
                                            </Modal>
                                        )
                                    )

                                }
                                </>

                            ))
                        }
                    </div>
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
