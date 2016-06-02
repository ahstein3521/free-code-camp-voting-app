import React,{Component} from 'react';
import { Link } from 'react-router';
import SignIn from './auth_forms/signin';
import List from './list_component'
import Selected from './ballot_component'

export default class extends Component {

  render() {
    return (
      <div>
        <h2 className='banner'>Voting is <span className='banner-span'>Cool</span></h2>
        <div className='row'>
          <List>
            <Link to={'/'} className='btn-sm btn-success'>Sign In</Link>
            <Link to={'/signup'} className='btn-sm btn-primary'>Sign Up</Link>
          </List>
          <Selected sharedParams={this.props.params.id}/>
    	 </div>     
      </div>
    );
  }
}