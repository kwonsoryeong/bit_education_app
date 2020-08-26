import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import Notice from './components/compInList/Notice'
import Vedio from './components/compInList/Vedio'
import Homework from './components/compInList/Homework'
import Question from './components/compInList/Question'

import CreateBang from './components/bangInList/CreateBang'
import Live from './components/live/Live'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/list/notice/:code" component={Notice} />
            <Route exact path="/list/video/:code" component={Vedio} />
            <Route exact path="/list/homework/:code" component={Homework} />
            <Route exact path="/list/question/:code" component={Question} />
            
            <Route exact path="/bang/createBang" component={CreateBang} />
            <Route exact path="/list/video/live/:code" component={Live} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App