import React, { Component } from 'react'
import { createBang } from './BangFunctions'
import jwt_decode from 'jwt-decode'

class CreateBang extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      adminId: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const token = localStorage.usertoken
    const decoded = jwt_decode(token);
    this.setState({
        adminId: decoded.id
    })
        
    const bang = {
      title: this.state.title,
      adminId: decoded.id

    }

    createBang(bang).then(res => {
      if (res) {
        this.props.history.push(`/profile`);
      }
    })

}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">방 만들기</h1>
              <div className="form-group">
                <label htmlFor="id">Title 정하기</label>
                <input
                  type="title"
                  className="form-control"
                  name="title"
                  placeholder="Enter title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                만들기
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateBang