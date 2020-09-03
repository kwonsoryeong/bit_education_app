import React, { Component } from 'react'
import Listt from './List'
import VideoList from '../videos/VideoList'
import { Link } from 'react-router-dom'

const Vedio = ({match}) => {
  return (
        <div className="contents">
          <button>
            <Link to={`/list/video/live/${localStorage.bangtoken}`} className="list-link">
              LIVE
            </Link>
          </button>
          <VideoList code={match.params.code}/>
        </div>
    )
}
/*class Vedio extends Component {
  render() {
    return (
        <div className="inBody">
        <List />
        <div className="contents">영상</div>
      </div>
    )
  }
}*/

export default Vedio
