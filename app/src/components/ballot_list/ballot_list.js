import React from 'react';
import ListItem from './ballot_list_item';

const BallotList = (props) => {
  const Items = props.ballots.map((ballot,i) => {
    return (
      <ListItem
        key={i}
        onDelete={props.onDelete}
        selected={props.selected}
        isUserList={props.isUserList}
        onBallotSelect={props.onBallotSelect}
        ballot={ballot} />
    );
  });

  return (
    <div className='col-md-4'>
      <div className='btn-group'>
      {props.children}
      </div>
      <ul className="list-group vote-list">
        {Items}
      </ul>
    </div>
  );
};

export default BallotList;