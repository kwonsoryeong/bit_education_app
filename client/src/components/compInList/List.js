import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './List.css';
class List extends Component {
  render() {
    const linkList = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={`/list/notice/${this.props.code}`} className="list-link">
            공지
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/list/video/${this.props.code}`} className="list-link">
            영상
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/list/homework/${this.props.code}`} className="list-link">
            과제
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/list/question/${this.props.code}`} className="list-link">
            질문
          </Link>
        </li>
      </ul>
    )


    return (
        <div className="list">
          {linkList}
        </div>
    )
  }
}

export default List