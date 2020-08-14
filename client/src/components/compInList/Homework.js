import React, { Component } from 'react'
import List from './List'
class Homework extends Component {
  render() {
    return (
        <div className="inBody">
          <List />
          <div className="contents">과제</div>
        </div>
    )
  }
}

export default Homework
