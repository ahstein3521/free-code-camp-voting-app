import React from 'react';

const List = (props) => {
  const Items = props.ballot.options.map((option,i) => {
    return (
      <label key={i} className="radio"> 
        <input value={i} name='vote' type="radio" onChange={()=>{props.optionSelect(option)}}/> 
          {option.name}
      </label>
    );
  });

  return (
    <div>
      {Items}
      {props.children}
    </div>
  );
};

export default List;



        
         
