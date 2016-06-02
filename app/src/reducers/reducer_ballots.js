import { FETCH_BALLOTS,REMOVE_BALLOT,ADD_BALLOT } from '../actions/types';

export default function(state =[], action) {
 
  switch (action.type) {
  case FETCH_BALLOTS:
    return action.payload.data 
  case REMOVE_BALLOT:
    return [...state.slice(0,action.payload),...state.slice(action.payload+1)]
  case ADD_BALLOT:
  	return [...state, action.payload]  
}
  return state;
}
