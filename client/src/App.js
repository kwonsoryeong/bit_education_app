import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import Listt from './components/compInList/List'
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
          <div className="container" style={{width: `100%`, margin:0}}>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/list" component={Listt} />
            <Route exact path="/list/notice" component={Notice} />
            <Route exact path="/list/video" component={Vedio} />
            <Route exact path="/list/homework" component={Homework} />
            <Route exact path="/list/question" component={Question} />
            
            <Route exact path="/bang/createBang" component={CreateBang} />
            <Route exact path="/list/video/live" component={Live} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App