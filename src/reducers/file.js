const initialState = ''

const file = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILE':
      return action.data
    case 'CLEAR_FILE': 
      return ''
    default:
      return state
  }
}

export default file