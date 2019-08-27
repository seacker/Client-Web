import React, {useState, useEffect} from 'react'  
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchSeats } from '../stores/actions'
import Tombol from '../components/tombol'

const position = [
    {coorX:630,coorY:255},{coorX:655,coorY:255},{coorX:680,coorY:255},{coorX:705,coorY:255},
    {coorX:730,coorY:255},{coorX:765,coorY:255},{coorX:790,coorY:255},{coorX:815,coorY:255},
    {coorX:840,coorY:255},{coorX:865,coorY:255},

    {coorX:630,coorY:290},{coorX:655,coorY:290},{coorX:680,coorY:290},{coorX:705,coorY:290},
    {coorX:730,coorY:290},{coorX:765,coorY:290},{coorX:790,coorY:290},{coorX:815,coorY:290},
    {coorX:840,coorY:290},{coorX:865,coorY:290},

    {coorX:630,coorY:300},{coorX:655,coorY:300},{coorX:680,coorY:300},{coorX:705,coorY:300},
    {coorX:730,coorY:300},{coorX:765,coorY:300},{coorX:790,coorY:300},{coorX:815,coorY:300},
    {coorX:840,coorY:300},{coorX:865,coorY:300}
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
