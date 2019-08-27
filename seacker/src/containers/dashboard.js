import React, {Component} from 'react'  
import { Button } from 'react-bootstrap'

const position = [
    {
        x : 640,
        y : 255
    },
    {
        x : 665,
        y : 255
    },
    {
        x : 690,
        y : 255
    },
    {
        x : 715,
        y : 255
    },
    {
        x : 735,
        y : 255
    }

]

class Dashboard extends Component {
    render() {
      return( 
        <div style={{marginTop:'30px'}}>
            <img src={require("../assets/landingPage.png")} style={{width:'1350px', height:'625px'}}></img>
            {/* {
                position.map(pos => {
                    return(
                        <Button style={{position:'absolute', left:pos.x, top:pos.y, zIndex:1, width:1, height:1, margin:5, padding:5, backgroundColor:'green'}}></Button>
                    )
                })
            } */}
            <Button style={{position:'absolute', left:640, top:300, zIndex:1, width:1, height:1, margin:5, padding:5, backgroundColor:'green'}}></Button>
            <Button style={{position:'absolute', left:665, top:300, zIndex:1, width:1, height:1, margin:5, padding:5, backgroundColor:'green'}}></Button>
        </div>
      )
    }
  }
export default Dashboard
