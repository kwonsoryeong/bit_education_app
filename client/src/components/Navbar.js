import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

class Landing extends Component {
  state = {
    bangTitle: ''
  }
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  getId(){
    if(localStorage.usertoken){
      const token = localStorage.usertoken
      const decoded = jwt_decode(token);
      return decoded.id
    }
  }
  getBangTitle(){ //return decoded
    try {
      if(localStorage.bangtoken){
        axios.post('http://localhost:3004/bangs/findBangTitle', {code : localStorage.bangtoken})
            .then(res => {
              this.setState({
                bangTitle: res.data
              });
            })
      }
    }
    catch (e) {
        console.log(`error : `+e);
    }
  }
  componentWillReceiveProps(){
    this.getBangTitle();
  }
  componentWillMount() {
    this.getBangTitle();
  }
  render() {
    const loginRegLink = (

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
          
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            MyStudyList
          </Link>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <div style={{ display: `inline`, color : `white`}}>
              {this.getId()}
              <a style={{ display: `inline` }} href="" onClick={this.logOut.bind(this)} className="nav-link">
                [Logout]
              </a>
            </div>
          </div>
        </li>
      </ul>
    )
    const bangLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <div style={{ color: `white`,fontSize: 25,margin:2 }}>
            {this.state.bangTitle}
          </div>
        </li>
        <li className="nav-item">
        <div className="nav-link">
          <div style={{ display: `inline`, color : `white`}}>
            {this.getId()}
            <a style={{ display: `inline` }} href="" onClick={this.logOut.bind(this)} className="nav-link">
              [Logout]
            </a>
          </div>
        </div>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          {localStorage.usertoken ? ( localStorage.bangtoken? bangLink : userLink ) : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)