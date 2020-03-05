import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import MatchList from '../MatchList';

import './App.css';

const client = new ApolloClient({
  uri: "https://apiv2.cricket.com/cricket"
});

function App() {
  const [matchStatus, setMatchStatus] = useState('');
  const [matchType, setMatchType] = useState('ALL');
  const [showList, setShowList] = useState(false);

  const windowInnerHeight = window.innerHeight - 120;

  const _handleMatchStatusBtnClick = (status) => {
    setMatchStatus(status);
  };

  const _handleDropDownClick = () => {
    setShowList(!showList);
  };

  const _handleOptionClick = (name) => {
    setShowList(false);
    setMatchType(name)
  };

  const matchTypeArray = [
    {
      id: 'all',
      name: 'ALL'
    },
    {
      id: 'international',
      name: 'INTERNATIONAL'
    },
    {
      id: 'domestic',
      name: 'DOMESTIC'
    }
  ];

  return (
    <ApolloProvider client={client}>
      <div className='app-container'>
        <div className='app-subheader'>
          <h2>Schedule</h2>
          <div className='btn-grp-container'>
            <div className='btn-grp'>
              <button className='btn-primary' onClick={() => _handleMatchStatusBtnClick('upcoming')}>UPCOMING</button>
              <button className='btn-primary' onClick={() => _handleMatchStatusBtnClick('running')}>RUNNING</button>
              <button className='btn-primary' onClick={() => _handleMatchStatusBtnClick('completed')}>COMPLETED</button>
            </div>
            <div className='btn-dropdown-container'>
              <button className='btn-primary' onClick={_handleDropDownClick}>{matchType}</button>
              <div className='dropdown-list'>
                {showList && matchTypeArray.map(item => (
                  <div className='dropdown-option' key={item.id} onClick={() => _handleOptionClick(item.name)}>{item.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='matches-list-container' style={{'height': windowInnerHeight}}>
          <MatchList matchStatus={matchStatus}/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
