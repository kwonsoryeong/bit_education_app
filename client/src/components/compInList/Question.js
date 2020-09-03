import React, { Component } from 'react'
import Listt from './List'
import QnaList from '../qnas/QnaList'

const Question = ({match}) => {
  return (
      <div className="contents">
        <QnaList code={localStorage.bangtoken}/>
      </div>
    )
}
/*class Question extends Component {
  render() {
    return (
        <div className="inBody">
        <List />
        <div className="contents">질문</div>
      </div>
    )
  }
}*/

export default Question
