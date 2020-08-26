import React, { Component } from 'react'
import List from './List'
import HwList from '../hws/HwList'

const Homework = ({match}) => {
  return (
    <div className="inBody">
      <List code={match.params.code}/>
      <div className="contents">
      <HwList code={match.params.code}/>
      </div>
    </div>
  )
}
/*class Homework extends Component {
  render() {
    return (
        <div className="inBody">
          <List />
          <div className="contents">과제</div>
        </div>
    )
  }
}*/

export default Homework
