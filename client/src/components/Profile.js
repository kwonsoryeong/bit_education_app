import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import List from './compInList/List'
import BangList from './bangInList/BangList'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    try {
        const decoded = jwt_decode(token);
        this.setState({
          id: decoded.id
        })
        
    }
    catch (e) {
        console.log(`error : `+e);
    }
    
    
  }

  render() {
    return (
      <div className="inBody">
        <div className="contents">  
          {this.state.id}님 반갑습니다 ^^*
        </div>
        <br/>
        <BangList />
        
      </div>
      /* 디자인 참고
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>ID</td>
                <td>{this.state.id}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>*/
    )
  }
}

export default Profile