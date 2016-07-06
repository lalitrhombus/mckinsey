import { INIT_APP, DELETE_EMP, ADD_EMP, EDIT_EMP } from '../actions/index';

export default function(state = [], action) {

  switch(action.type){
    case INIT_APP:
        return action.payload;
    case DELETE_EMP:{
    	let tempState = [];
    	for(let i=0;i<state.length;i++){
    		if(state[i].id == action.payload){
    			tempState = [...state.slice(0,i),...state.slice(i+1)];
    		}
    	}
    	return tempState;
    }
    case ADD_EMP:{
      let id = state[state.length - 1 ].id +1;
      let pic = id+".jpg";
      action.payload.id = id; 
      action.payload.pic = pic;
      return [...state, action.payload]
    }
    case EDIT_EMP:{
      let tempState = [];
      for(let i=0;i<state.length;i++){
        if(state[i].id == action.payload.id){
          tempState.push(action.payload);
        }
        else{
          tempState.push(state[i]); 
        }
      }
      return tempState;
    }
  }
  return state;
}