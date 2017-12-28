// This holds the value of the selected library.

// The action parameter is an action creator which holds a type and a payload.
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
