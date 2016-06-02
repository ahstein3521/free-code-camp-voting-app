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
    this.handleOptionSubmit=this.handleOptionSubmit.bind(this)
    this.toggleSelection=this.toggleSelection.bind(this)

    this.state={selected:false,newOption:'',label:'Other',checked:false}
  }
  handleOptionSubmit(e){
    e.preventDefault();
    const name=Format(this.state.newOption);
    this.props.addChoice({name ,votes:1})
    this.setState({label:name,selected:!this.state.selected,checked:true})

  }
  handleOnChange(e){
    this.setState({newOption:e.target.value,checked:!this.state.checked})
  }
  
  toggleSelection(){
    this.setState({checked:!this.state.checked,selected:!this.state.selected})
  }  
  
  renderRadio(){
    return <label className="radio"> 
              <input name='vote' type="radio" checked={this.state.checked} onChange={this.toggleSelection}/> 
                {this.state.label}
                {this.renderEditLink()}
            </label>
  }
  renderEditForm(){
    return( 
    <div className='new-choice'>
       <input type='text' value={this.state.newOption} onChange={this.handleOnChange}/>
       <input type='submit' className={'btn-sm btn-danger'} onClick={this.handleOptionSubmit} value="Add"/>
    </div>
    )
  }
  renderEditLink(){
    if(!this.state.selected && this.state.label!=='Other'){
      return <p className='edit-link' onClick={()=>{this.setState({selected:true,label:'Other'})}}>Edit?</p>
    }
    return <p></p>
  }
  render(){
    if(this.state.selected && this.state.label=='Other'){
      return this.renderEditForm();
    }
    return this.renderRadio();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(newChoice);


