import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import {titleize, makeList} from '../../actions/utils/ballot_create_form'


class createNew extends Component {
  
  handleFormSubmit({options,title}) {
    const user=localStorage.getItem('user');
    const body={options:makeList(options),
                title:titleize(title),
                author:user}; 
            
    this.props.newBallot(body);
    this.props.selectBallot(body)
  }

  render() {
    const { handleSubmit, fields: { title, options }} = this.props;
    return (
      <div className='col-sm-8'>
      <form  className='user-forms' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Ballot Title:</label>
          <input {...title} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Options:</label>
          <textarea {...options} className="form-control" placeholder='Enter one option per line.' />
          <button action="submit" className="btn btn-primary">Submit</button>
        </fieldset>
        
      </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'createNew',
  fields: ['title', 'options']
},null, actions)(createNew);

