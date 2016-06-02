import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';



 class Signup extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
  goBack(e){
    e.preventDefault()
    this.context.router.goBack();
    //http://stackoverflow.com/questions/30915173/react-router-go-back-a-page-how-do-you-configure-history
  }
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }
  
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <div>
        <h2>Please provide some basic info.</h2>
        <hr/>
        <h4><em>Feel free to enter a fake email, I really couldnt care less...</em></h4>
        <form className='signup-form'  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <input {...email} type='email' className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input  {...password}type="password" className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <input {...passwordConfirm}  type="password" className="form-control" />
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </fieldset>
          {this.renderAlert()}
          <fieldset className='signin-btn'>
            <button action="submit" className="btn">Sign Up</button>
            <button action="submit" className="btn btn-cancel" onClick={(e)=>{return this.goBack(e)}}>Cancel</button>
            
          </fieldset>
        </form>
     </div>       
    );
  }
}
function validate(formProps) {
  const errors = {};
  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {

  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);