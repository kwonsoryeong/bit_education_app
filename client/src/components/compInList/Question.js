import React, { Component } from 'react'
import List from './List'

class Question extends Component {
  render() {
    return (
        <div className="inBody">
        <List />
        <div className="contents">질문</div>
      </div>
    )
  }
}

export default Question
