import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create-project'>New Project</NavLink></li>
        <li><a onClick={props.logoutAction} >Log Out</a></li>
        <li>
          <NavLink to='/' className="btn btn-floating pink lighten-1">
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     authError: state.auth.authError
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => dispatch(logoutAction())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)