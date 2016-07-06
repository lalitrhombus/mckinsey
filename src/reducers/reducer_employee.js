import { INIT_APP, DELETE_EMP } from '../actions/index';

export default function(state = [], action) {

  switch(action.type){
    case INIT_APP:
        return action.payload;
    case DELETE_EMP:{
    	var tempState = [];
    	for(let i=0;i<state.length;i++){
    		if(state[i].id !== action.payload){
    			tempState.push(state[i]);
    		}
    	}
    	return tempState;
    }
  }
  return state;
}