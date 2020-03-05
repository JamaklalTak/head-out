import React from 'react';
import moment from 'moment';

import './MatchCard.css';

const MatchCard = (props) => {

  return(
  <div className='card' key={props.match.matchId}>
    <div className='card-body'>
      <div className='card-title'>
        <div>{props.match.seriesName}</div>
        <div>&gt;</div>
      </div>
      <div className='divider'/>
      <div>
        <p className='match-number'>{props.match.matchNumber}</p>
        <div className='match-detail'>
          <div className='team-names'>
            <div>{props.match.homeTeamName}</div>
            <div>{props.match.awayTeamName}</div>
          </div>
          <div className='match-time'>
            <div>{props.match.venue}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
};

export default MatchCard;