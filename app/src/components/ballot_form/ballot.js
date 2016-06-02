import React from 'react';


import OptionList from './ballot_options'


 const BallotSelected = (props)=>{ 
    
   
    if(!props.ballotSelected){
      return <p></p>
    }
        


    return (
      <div className='col-sm-8'>  
        <div className="form vote-active">
          
          <h2>{props.ballotSelected.title}</h2>      
          <OptionList ballot={props.ballotSelected} optionSelect={props.handleSelect}>
          {props.children}
          </OptionList>
          <fieldset className='btn-group'>
            <button action="submit" className="btn btn-primary" onClick={props.handleSubmit}>Submit</button>
          </fieldset>        
      </div>
    </div>
    );
  }

export default BallotSelected

