import React, {useState, useEffect} from 'react'  
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchSeats } from '../stores/actions'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

function Dashboard (props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        // props.fetchSeats()

        if(!localStorage.getItem('token')){
            props.history.push('/')
        }
    }, [])
    
    return( 
        <div style={{marginTop:'30px'}}>
            {
                props.isLoading ? (
                    <h3 style={{textAlign : 'center'}}>Loading ...</h3>
                ) : (
                    <div>
                        {props.allSeat.map(seat => (
                            <h6>{seat}</h6>
                        ))}
                    </div>
                    // <h6>{JSON.stringify(props.allSeat)}</h6>
                )
            }
            {/* <img src={require("../assets/landingPage.png")} style={{width:'1350px', height:'625px'}} alt='denah'></img>
                {
                props.allSeat.map((pos, index) => {
                    return(
                        <>
                        <Button style={{position:'absolute', left:pos.coorX, top:pos.coorY, zIndex:1, 
                            width:1, height:1, margin:5, padding:5, backgroundColor:'green'}}
                            key={index} onClick={handleShow}
                        ></Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{pos.blockName}</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </>
                    )
                })
            } */}
        </div>
      )
    }
const mapStateToProps = state => {
    return{
        ...state,
        allSeat : state.allSeat
    }
}
const mapDispatchToProps = { fetchSeats }

export default Dashboard
// connect(mapStateToProps,mapDispatchToProps)(Dashboard)
