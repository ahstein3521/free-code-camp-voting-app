import {ACTIVE_BALLOT,FETCH_BALLOTS,REMOVE_BALLOT,SUBMIT_VOTE,ADD_OPTION, TOGGLE_LIB,
        TOGGLE_FORM,ACTIVE_OPTION,ADD_BALLOT,AUTH_USER,AUTH_ERROR,UNAUTH_USER,FETCH_MESSAGE} from './types'

import axios from 'axios';
import { browserHistory } from 'react-router';

const Root_Url='https://ahstein3521-vote-app.herokuapp.com'

export function selectBallot(ballot) {
  return {type: ACTIVE_BALLOT,payload: ballot};
}
export function selectOption(option){
  return{type:ACTIVE_OPTION,payload:option} 
}

export function fetchBallots(){
  const request=axios.get(`${Root_Url}/ballots`);
  return {type: FETCH_BALLOTS,payload: request};
}
export function fetchBallotByID(id){
  return function(dispatch) {
  axios.get(`${Root_Url}/ballots/${id}`)
    .then((response)=>{
      dispatch(selectBallot(response.data));   
    })
  } 
}
export function toggleForm(view){
  return({type:TOGGLE_FORM,payload:view})
}
export function toggleLibs(lib){
  return ({type:TOGGLE_LIB,payload:lib})
}
export function newBallot(body) {
  return (dispatch)=>{ 
    axios.post(`${Root_Url}/ballots`, body)
    .then(()=> dispatch(fetchBallots()))
   }
}
export function addChoice(choice){
    return({type:ADD_OPTION,payload:choice})
}
export function submitVote(body){ 
    axios.put(`${Root_Url}/ballots/${body._id}`,body)
    return ({type:SUBMIT_VOTE,payload:body})  
}

export function removeBallot(id,index){ 
      axios.delete(`${Root_Url}/ballots/${id}`)
    return ({type:REMOVE_BALLOT,payload:index});
}


export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${Root_Url}/signup`, { email, password })
      .then(response => {
        
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user',response.data.email);
        browserHistory.push('/user');
      })
      .catch(() => {
        dispatch(authError('This Email is already in use according to my intel.'));
      });
  }
}
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${Root_Url}/signin`, { email, password })
      .then(response => {
        
        dispatch({ type: AUTH_USER ,payload:email });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user',response.data.email);
        browserHistory.push('/user');
      })
      .catch(() => {
        dispatch(authError('Why did you enter the wrong info?'));
      });
  }
}
export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  toggleLibs(null);
  return { type: UNAUTH_USER };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
