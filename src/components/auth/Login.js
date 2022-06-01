import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Login with your email</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" autoComplete="on" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" autoComplete="on" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login