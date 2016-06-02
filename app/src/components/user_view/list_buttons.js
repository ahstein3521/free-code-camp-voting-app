import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

 class Buttons extends Component{
	constructor(props){
		super(props);
		this.state=({label:'My Ballots'})
	}
	toggleLibButtons(){
		let label=(this.state.label=='My Ballots')? 'All Ballots' : 'My Ballots'
		this.setState({label:label})
		this.props.selectBall
		this.props.toggleLibs(label)
	}	


	render(){
		return(
		<div>	
			<button className='btn-sm btn-success' onClick={()=>{this.props.toggleForm('Create New')}}>Create New</button>
			<button className='btn-sm btn-primary' onClick={()=>{return this.toggleLibButtons()}}>{this.state.label}</button>
			<button className='btn-sm btn-warning' onClick={()=>{this.props.signoutUser()}}>Sign Out</button>
		</div>)
	}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Buttons);





