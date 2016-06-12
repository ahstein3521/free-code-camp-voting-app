import React from 'react';


const BallotListItem = ({ballot, onBallotSelect,selected,onDelete,isUserList,onShare}) => {
   
   let Buttons=(isUserList)?<div><button className='btn-danger' onClick={()=>{onDelete(ballot._id)}}>
                                <span className='glyphicon glyphicon-trash'></span>
                             </button>
                             <a href={`/public/${ballot._id}`} target='_blank'><button className='btn-share'>
                                <span className='glyphicon glyphicon-link'></span>
                              </button></a></div>: <p></p>;

   let classs=(selected &&selected.title==ballot.title)? 'list-group-item active' : 'list-group-item'
  return (
        
        <li className={classs}  onClick={()=> {onBallotSelect(ballot)}}>
         	
         	<div>{ballot.title}</div> 
         	{Buttons}
         	
              
        </li>
  );
};

export default BallotListItem;


