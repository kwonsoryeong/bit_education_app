import React, { Component } from 'react'

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
        여기는 영상
      </div>
    )
  }
}

export default Live