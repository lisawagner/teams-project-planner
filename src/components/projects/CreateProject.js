import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    projectTitle: '',
    projectDetails: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.props.createProject(this.state)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    const { auth } = this.props;
    if(!auth) return <Redirect to='/login' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add New Project</h5>
          <div className="input-field">
            <label htmlFor="projectTitle">Project Title</label>
            <textarea className="materialize-textarea" type="projectTitle" id="projectTitle" autoComplete="on" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="projectDetails">Project Details</label>
            <textarea id="projectDetails" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firestore.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)