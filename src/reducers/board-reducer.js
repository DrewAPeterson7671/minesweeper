export default (state = {}, action) => {
  let newState;
  const { spaceList } = action;

  switch (action.type) {
    case 'POPULATE':
      newState = Object.assign({}, state, {
        spaceList = {}
          for (i = 0, i++, i < 100)
      })
  }
}
