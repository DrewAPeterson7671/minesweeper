import boardReducer from './board-reducer';
import uncoverSpaceReducer from './uncover-space-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterSpaceList: boardReducer
});

export default rootReducer;
