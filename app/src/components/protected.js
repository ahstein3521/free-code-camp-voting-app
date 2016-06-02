import React,{Component} from 'react';
import List from './list_component'
import NewOption from './user_view/ballot_option_new'
import Selected from './ballot_component'
import Buttons from './user_view/list_buttons'


export default class extends Component {
  render() {
    return (
    <div>
      <h2 className='banner'>Voting is <span className='banner-span'>Cool</span></h2>
        <div className='row'>
          <List>
            <Buttons/>
          </List>
          <Selected>
            <NewOption/>
          </Selected>
    	   </div>     
       </div>  
    );
  }
}