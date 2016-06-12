import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import _ from 'lodash'

 const Format=(str)=>{return str.split(' ').map((v)=>{return _.capitalize(v)}).join(' ')}

 class newChoice extends Component{

  constructor(props){
    super(props);
    this.handleOnChange=this.handleOnChange.bind(this)
    this.toggleSelection=this.toggleSelection.bind(this)
    
    this.state={newOption:'',checked:false}
  }
  
  handleOnChange(e){
   this.setState({newOption:e.target.value});
   this.props.addChoice({name:e.target.value,votes:1});
   this.props.selectOption({name:e.target.value,votes:1});
   
  }
  toggleSelection(){
   this.setState({checked:!this.state.checked});
  
  }  
  renderRadio(){
    return <label className="radio"> 
              <input name='vote' type="radio" checked={this.state.checked} onChange={this.toggleSelection}/> 
                {this.props.ballot.newChoice.name||'Other'}               
            </label>
  }
  renderEditForm(){
    return( 
    <div className='new-choice'>
       <input type='text' 
              value={this.state.newOption} 
            onBlur={this.toggleSelection} 
            onChange={this.handleOnChange}
            autoFocus/>
    </div>
    )
  }
  renderField(){
    if(this.state.checked){

      return this.renderEditForm();
    }
    return this.renderRadio();
  }
  render(){
    return this.renderField();
  }
}
function mapStateToProps(state){
  return {ballot:state.ballotSelected}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(newChoice);


