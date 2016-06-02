import React,{Component} from 'react';
import { Link } from 'react-router';
import SignIn from './auth_forms/signin';

export default class Home extends Component {
  render() {
    return (
      <div>
      <h1>Rock The Vote</h1>
    	 <SignIn/>
          <Link to={'/public'}>
            <h4>Continue as a Guest</h4>
        </Link>
    	</div>     
 
    );
  }
}