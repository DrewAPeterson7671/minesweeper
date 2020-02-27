export default (state = {}, action) => {
  switch (action.type) {
  case 'UNCOVER':
    action.covered = false;
    return action.covered;
  default:
    return state;
  }
};
