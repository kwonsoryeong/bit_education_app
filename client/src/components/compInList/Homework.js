import React, { Component } from 'react'
import Listt from './List'
import HwList from '../hws/HwList'

const Homework = ({match}) => {
  return (
    <div className="contents">
      <HwList code={localStorage.bangtoken}/>
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
