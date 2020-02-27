export default (state = {}, action) => {
  switch (action.type) {
  case 'UNCOVER':
  console.log("UNCOVER");
    return action.spaceId;
  default:
    return state;
  }
};
