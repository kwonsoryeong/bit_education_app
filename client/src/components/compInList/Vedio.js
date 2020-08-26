import React, { Component } from 'react'
import List from './List'
import VideoList from '../videos/VideoList'
import { Link } from 'react-router-dom'

const Vedio = ({match}) => {
  return (
      <div className="inBody">
        <List code={match.params.code}/>

        <div className="contents">
          <button>
            <Link to={`/list/video/live/${match.params.code}`} className="list-link">
              LIVE
            </Link>
          </button>
          <VideoList code={match.params.code}/>
        </div>
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
