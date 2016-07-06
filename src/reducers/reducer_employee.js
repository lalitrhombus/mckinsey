import { INIT_APP } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case INIT_APP:
        return action.payload;
  }
  return state;
}