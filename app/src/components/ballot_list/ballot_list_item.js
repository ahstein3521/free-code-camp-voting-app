import React from 'react';
import {Link} from 'react-router'

const BallotListItem = ({ballot, onBallotSelect,selected,onDelete,isUserList,onShare}) => {
   
   let Buttons=(isUserList)?
          <div>
            <button className='btn-danger' onClick={()=>{onDelete(ballot._id)}}>
              Delete
              <span className='glyphicon glyphicon-trash'></span>
            </button>
            <Link to={`/public/${ballot._id}`} target='_blank'>
              <button className='btn-share'>
              Share
                <span className='glyphicon glyphicon-link'></span>
              </button>
            </Link>
          </div>:  <p></p>;

   let classs=(selected &&selected.title==ballot.title)? 'list-group-item active' : 'list-group-item'
  return (
        
        <li className={classs}  onClick={()=> {onBallotSelect(ballot)}}>
         	
         	<div>{ballot.title}</div> 
         	{Buttons}
         	
              
        </li>
  );
};

export default BallotListItem;


