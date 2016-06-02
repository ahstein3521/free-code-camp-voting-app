import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import BallotList from './ballot_list/ballot_list'
import _ from 'lodash'



class List extends Component {
  
  componentWillMount(){ 
    this.props.fetchBallots();
  }
  isUserList(){
    return this.props.ballotSelected && this.props.ballotSelected.currentLibrary=='All Ballots'&&
    this.props.auth&&this.props.auth.authenticated
  }//determine whether to render the SHARE and DELETE buttons.
  
  toggleList(){
    const List=this.props.ballots;
    const selected=this.props.ballotSelected
    const User=localStorage.getItem('user')
    
    const UserList=_.filter(List,(ballot)=>{return User==ballot.author})
    if(selected && selected.currentLibrary=='All Ballots' && User){
      return UserList
    } 
   return List 
}//toggle between user's own ballots and whole collection
  
  render() { 
    return (
          <BallotList 
            onBallotSelect={(b)=>{this.props.selectBallot(b)}} 
                  onDelete={(index,id)=>{this.props.removeBallot(id,index)}}
                   ballots={this.toggleList()}  
                isUserList={this.isUserList()}       
                  selected={this.props.ballotSelected}>
              {this.props.children}
          </BallotList>    
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {ballots: state.ballots,
          auth:state.auth,
          ballotSelected:state.ballotSelected};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);