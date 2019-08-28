import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { checkLogin } from './stores/actions'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './containers/landingPage'
import Dashboard from './containers/dashboard'
import Booked from './containers/detail'
import {fetchSeats} from './stores/actions'
import Navbar from './components/navbar'

function App(props) {
  // const [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   console.log(props, "ini history")
  //   if(localStorage){
  //     props.checkLogin(true)
  //   }
  // }, [])

  useEffect(() => {
    props.fetchSeats()
  }, [])

  return (
    <div className="App">
     
        <Router>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/booked" component={Booked}/>
        </Router>
    </div>
  );
}

const mapPropstoState = state => {
  return {
      ...state
  }
}

const mapDispatchtoProps = { fetchSeats }

// export default App
export default connect(mapPropstoState, mapDispatchtoProps)(App);
