// export default (state = {}, action) => {
//   let newState;
//   const { covered, id } = action;
//
//   switch (action.type) {
//   case 'UNCOVER':
//     newState = Object.assign({}, state, {
//       [id]: {
//         covered: false
//       }
//     });
//     return newState;
//
//   default:
//     return state;
//   }
// };
