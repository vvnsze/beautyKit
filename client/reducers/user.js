const default_state = {
  name: 'Vivian',
  id: '1'
}
const UserReducer = (state = default_state, action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      return state
    default:
      return state
  }
}

export default UserReducer
