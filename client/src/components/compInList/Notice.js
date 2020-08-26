import React, { Component } from 'react'
import List from './List'
import Crud from '../contents/Crud';

const Notice = ({match}) => {
  return (
    <div className="inBody">
      <List code={match.params.code}/>
      <div className="contents">
        <Crud code={match.params.code}/>
      </div>
    </div>
  )
}
/*class Notice extends Component {
  render() {
    return (
      <div className="inBody">
        <List />
        <div className="contents">
          <Crud />
        </div>
      </div>
    )
  }
}*/

export default Notice
