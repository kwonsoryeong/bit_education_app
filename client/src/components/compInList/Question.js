import React, { Component } from 'react'
import List from './List'
import QnaList from '../qnas/QnaList'

const Question = ({match}) => {
  return (
        <div className="inBody">
        <List code={match.params.code}/>
        <div className="contents">
        <QnaList code={match.params.code}/>
      </div>
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
