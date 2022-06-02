import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

// authorFirstName
// authorLastName
// createdAt

const ProjectDetails = (props) => {
  const { project, auth } = props
  if(!auth.uid) return <Redirect to='/login' />

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.projectTitle}</span>
            <p>{project.projectDetails}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by the {project.authorFirstName} {project.authorLastName}</div>
            <div>September 3rd, 2am</div>
        </div>
      </div>
    </div>
    )
    
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

// chain together 2 HOCs using Redux connect
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)