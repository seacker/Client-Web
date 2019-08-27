import React, {useState, useEffect} from 'react'  
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchSeats } from '../stores/actions'
import Tombol from '../components/tombol'

const position = [
    {coorX:630,coorY:313},{coorX:655,coorY:313},{coorX:680,coorY:313},{coorX:705,coorY:313},
    {coorX:730,coorY:313},{coorX:765,coorY:313},{coorX:790,coorY:313},{coorX:815,coorY:313},
    {coorX:840,coorY:313},{coorX:865,coorY:313},

    {coorX:630,coorY:347},{coorX:655,coorY:347},{coorX:680,coorY:347},{coorX:705,coorY:347},
    {coorX:730,coorY:347},{coorX:765,coorY:347},{coorX:790,coorY:347},{coorX:815,coorY:347},
    {coorX:840,coorY:347},{coorX:865,coorY:347},

    {coorX:630,coorY:357},{coorX:655,coorY:357},{coorX:680,coorY:357},{coorX:705,coorY:357},
    {coorX:730,coorY:357},{coorX:765,coorY:357},{coorX:790,coorY:357},{coorX:815,coorY:357},
    {coorX:840,coorY:357},{coorX:865,coorY:357}
]
function Dashboard (props){
    const [data, setData] = useState([])
    
    useEffect(()=> {
        props.fetchSeats()
    }, [])
    
    return( 
        <div style={{marginTop:'30px'}}>
            <img src={require("../assets/landingPage.png")} style={{width:'1350px', height:'625px'}} alt='denah'></img>
                {
                position.map(pos => {
                    return(
                        <Button style={{position:'absolute', left:pos.coorX, top:pos.coorY, zIndex:1, width:1, height:1, margin:5, padding:5, backgroundColor:'green'}}></Button>
                    )
                })
            }
        </div>
      )
    }
const mapStateToProps = state => {
    return{
        ...state
    }
}
const mapDispatchToProps = { fetchSeats }

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
