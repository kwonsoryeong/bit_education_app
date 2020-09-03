import React, { Component } from 'react'
import Listt from './List'
import VideoList from '../videos/VideoList'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Vedio = ({match}) => {
  return (
        <div className="contents">
          <Button variant="contained" color="primary" style={{margin:30, width:`50%`}}>
            <Link to={`/list/video/live`} className="list-link" style={{ color : `white`}}>
              LIVE
            </Link>
          </Button>
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
