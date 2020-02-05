import { combineReducers } from 'redux';
import counterReducer from './counterReducers';

const reducers = combineReducers({
  counterReducer, //counterReducer: counterReducer ile ayni anlama geliyor
});

export default reducers;
