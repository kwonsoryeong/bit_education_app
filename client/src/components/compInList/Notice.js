import React, { Component } from 'react'
import List from './List'
class Notice extends Component {
  render() {
    return (
        <div className="inBody">
          <List />
          <div className="contents">공지</div>
        </div>
    )
  }
}

export default Notice
