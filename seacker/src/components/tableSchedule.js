import React, {useState, useEffect} from 'react'
import {Container, Table, Row, Col} from 'react-bootstrap'

function TableSchedule(props){
    const [schedule, setSchedule] = useState([])
    
    useEffect(() => {
        console.log(props, "halo ini props table")
    }, [])
    
    return (
        <Container>
         <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th rowSpan={2}>#</th>
                        <th colSpan={5}>Room</th>
                        {/* <th>Last Name</th>
                        <th>Username</th> */}
                        </tr>
                        <tr>
                        {/* <th>#</th> */}
                        <th>Time</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                    </Table>
        </Container>
    )
}

export default TableSchedule