export default (state = {}, action) => {
  let newState;
  const { covered, mine, xCoordinate, yCoordinate, coordinates, id } = action;

  switch (action.type) {
    case 'POPULATE':
      newState = Object.assign({}, state, {
        [id]: {
          covered: covered,
          mine: mine,
          xCoordinate: xCoordinate,
          yCoordinate: yCoordinate,
          coordinates: coordinates,
          id: id
        }
      });
      return newState;
    case 'MINEIFY':
    console.log('MINEIFY');
      newState = Object.assign({}, state, {
        [coordinates]: {
          mine: true
        }
      });
      console.log(newState);
      return newState;
    case 'UNCOVER':
      newState = Object.assign({}, state, {
        [id]: {
          covered: false
        }
      });
      console.log(state);
      return newState;
    default:
      return state;
    }
};
