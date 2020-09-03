import React, { Component } from 'react'
import Crud from '../contents/Crud';

const Notice = ({match}) => {
  return (
      <div className="contents">
        <Crud code={localStorage.bangtoken}/>
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
