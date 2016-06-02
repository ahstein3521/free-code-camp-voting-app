import {ACTIVE_BALLOT,ACTIVE_OPTION,TOGGLE_FORM,ADD_OPTION,
		TOGGLE_LIB,SUBMIT_VOTE} from '../actions/types'

export default function(state = null, action) {
  switch(action.type) {
	  case ACTIVE_BALLOT:
	    return Object.assign({},{...state,...action.payload, currentSelection:null, view:null, newChoice:null});
	  case ACTIVE_OPTION:
	  	return Object.assign({}, {...state,currentSelection:action.payload})
	  case ADD_OPTION:
	  	return Object.assign({}, {...state, newChoice:action.payload})	  		
	  case SUBMIT_VOTE:
	  	return Object.assign({}, {...state, ...action.payload, view:'Chart'})
	  case TOGGLE_FORM:
	  	return Object.assign({},{...state, view:action.payload})	
	  case TOGGLE_LIB:
	  	return Object.assign({},{...state, currentLibrary:action.payload})		
	  	}  
  return state;
}  



