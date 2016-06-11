import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import SelectedBallot from './ballot_form/ballot'
import Results from './ballot_form/vote_results'
import CreateNew from './user_view/create_new'
import _ from 'lodash'

 class Ballot extends Component {  
  constructor(props){
    super(props);
    this.handleSelect=this.handleSelect.bind(this);
    
  }
  
  componentWillMount(){
    const params=this.props.sharedParams
    if(params){
      this.props.fetchBallotByID(params);  
     }
  }
  
  handleSelect(option){
    this.props.selectOption(option);
  }  
  
  handleSubmit(){
    let ballot=this.props.ballotSelected;
    //Just in case an appended option not in the DB was selected
    if(ballot.newChoice&&!ballot.currentSelection){  
      ballot.options=[...ballot.options,ballot.newChoice];
      this.props.selectOption(ballot.newChoice)
      return this.props.submitVote(ballot);
    }
    
    ballot.currentSelection.votes++;
    this.props.submitVote(ballot)
  }
  
  renderSelectedBallot(){
    return( 
      <SelectedBallot 
           handleSelect={this.handleSelect}   
         ballotSelected={this.props.ballotSelected}
           handleSubmit={()=>{return this.handleSubmit()}}>
            {this.props.children}
        </SelectedBallot>
        )
  }
  
  toggleSelectedView(){
    const selected=this.props.ballotSelected
    
    if(selected && selected.view=='Chart'|| selected && selected.currentLibrary=='All Ballots' && selected.options ){
      return <Results ballot={selected}/>
    }
    else if(selected&&selected.view=='Create New'){
      return <CreateNew/>
    }
    else if(selected&&!selected.options&&selected.currentLibrary){
      return <p></p>
    }
    else{
      return this.renderSelectedBallot();      
    }
  }
  
  render() {
    if(!this.props.ballotSelected){return <p></p>}
    
    return (<div>{this.toggleSelectedView()}</div>);
  }
}


function mapStateToProps({ballotSelected,ballots}){
  
  return {ballotSelected,ballots}
  }
  

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Ballot);