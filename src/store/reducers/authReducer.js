const initialState = {
  authError: null
}

const authReducer = (state = initialState, action) => {

  switch(action.type){

    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed: Please check your credentials and try again.'
      }

    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        authError: null
      }

    case 'LOGOUT_SUCCESS':
      console.log('logout success');
      return state

    case 'LOGOUT_ERROR':
      console.log('logout error issue');
      return state

    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state
  }
}

export default authReducer