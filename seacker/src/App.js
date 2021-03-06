import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { checkLogin } from './stores/actions'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './containers/landingPage'
import Dashboard from './containers/dashboard'
import Booked from './containers/success'
import Meeting from './containers/meeting'
import {fetchSeats} from './stores/actions'
import Navbar from './components/navbar'

function App(props) {
  // const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    console.log(props, "ini history")
    if(localStorage.getItem('token')){
      props.checkLogin(true)
    }
  }, [localStorage])

  useEffect(() => {
    props.fetchSeats()
  }, [])

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/booked" component={Booked}/>
          <Route exact path="/meeting" component={Meeting} />
        </Router>
    </div>
  );
}

const mapPropstoState = state => {
  return {
      ...state
  }
}

const mapDispatchtoProps = { fetchSeats, checkLogin }

// export default App
export default connect(mapPropstoState, mapDispatchtoProps)(App);
