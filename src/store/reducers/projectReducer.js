const initialState = {
  projects: [
    {
      id: '1',
      authorFirstName: 'Big',
      authorLastName: 'Giggles',
      createdAt: '',
      projectTitle: 'eCommerce Fashion Site',
      projectDetails: 'An eCommerce site, featuring advanced menu system and Stripe payments. Frontend will be in ReactJS and backend will be MongoDB, along with Firebase authentication'
    },
    {
      id: '2',
      authorFirstName: 'Shiny',
      authorLastName: 'Sparkles',
      createdAt: '',
      projectTitle: 'Movie Database',
      projectDetails: 'A movie database where users can view details on their favourite movies and actors. React/Typescript frontend with GraphQL calls to an external movie database API.'
    },
    {
      id: '3',
      authorFirstName: 'Shiny',
      authorLastName: 'Sparkles',
      createdAt: '',
      projectTitle: 'Word Game Project',
      projectDetails: 'A Wordle inspired project, fun for the whole family.'
    },
    {
      id: '4',
      authorFirstName: 'Shiny',
      authorLastName: 'Sparkles',
      createdAt: '',
      projectTitle: 'Debug Event Central',
      projectDetails: 'Wow! Really had to dig through this code. Removed packages, downgrade, upgraded, repeated, until I found a work around.'
    },
  ]
}
// authorFirstName
// authorLastName
// createdAt

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('created project: ', action.project);
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error: ', action.err);
      return state
    default:
      return state
  }
}

export default projectReducer