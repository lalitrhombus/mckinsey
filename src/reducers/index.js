import { combineReducers } from 'redux';
import employeeReducer from './reducer_employee';
console.log(employeeReducer);

const rootReducer = combineReducers({
  employeeList:employeeReducer
});




export default rootReducer;
