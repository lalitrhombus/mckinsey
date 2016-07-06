import { combineReducers } from 'redux';
import employeeReducer from './reducer_employee';


const rootReducer = combineReducers({
  employeeList:employeeReducer
});

export default rootReducer;
