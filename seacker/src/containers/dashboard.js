import React, {Component} from 'react'  
import { Button } from 'react-bootstrap'


class Dashboard extends Component {
    componentDidMount(){

    }
    
    render() {
      return( 
        <div style={{marginTop:'30px'}}>
            <img src={require("../assets/landingPage.png")} style={{width:'1350px', height:'625px'}}></img>
            {
                position.map(pos => {
                    return(
                        <Button style={{position:'absolute', left:pos.x, top:pos.y, zIndex:1, width:1, height:1, margin:5, padding:5, backgroundColor:'green'}}></Button>
                    )
                })
            }
        </div>
      )
    }
  }
export default Dashboard
