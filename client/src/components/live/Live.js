import React, { Component } from 'react'
import Video from './Video'

class Live extends Component {
  constructor() {
    super()
    this.state = {
    }

  }

  onSubmit(e) {
    e.preventDefault()

}

  render() {
    return (
      <div className="container">
        <Video/>
      </div>
    )
  }
}

export default Live