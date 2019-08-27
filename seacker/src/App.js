import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './containers/landingPage'
import Dashboard from './containers/dashboard'
import Booked from './containers/detail'
import store from './stores'

import Navbar from './components/navbar'

function App(props) {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    console.log(props.history, "ini history")
    if(localStorage){
      
    }
  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {/* <Navbar /> */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/booked" component={Booked}/>
        </Router>
      </Provider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
