import React, {useState, useEffect} from 'react'  
import { Button } from 'react-bootstrap'

const Tombol = ({data}) => {
    return(
        <div>
            <img src={require("../assets/landingPage.png")} style={{width:'1350px', height:'625px'}} alt='denah'></img>
            <Button style={{position:'absolute', left:data.coorX, top:data.coorY, zIndex:1, width:1, height:1, margin:5, padding:5, backgroundColor:'green'}}></Button>
        </div>
    )
}

export default Tombol