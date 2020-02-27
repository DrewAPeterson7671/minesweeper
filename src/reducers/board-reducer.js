export default (state = { masterSpaceList: {} }, action) => {
  let newState;
  const { covered, mine, xCoordinate, yCoordinate, id } = action;

  switch (action.type) {
    case 'POPULATE':
      newState = Object.assign({}, state, {
        [id]: {
          covered: covered,
          mine: mine,
          xCoordinate: xCoordinate,
          yCoordinate: yCoordinate,
          id: id
        }
      });
      return newState;
    default:
      return state;
    }
};
