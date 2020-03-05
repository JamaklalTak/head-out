import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import MatchCard from './component/MatchCard';

const MatchList = () => (
    <Query query={gql`
    {
        featurematch {
            IPLpolling {
                name
                isPolling
                display
                isAuctionStarted
            }
            seriesID
            currentinningsNo
            currentInningteamID
            currentInningsTeamName
            seriesName
            homeTeamName
            awayTeamName
            toss
            startEndDate
            matchStatus
            matchID
            matchType
            statusMessage
            matchNumber
            venue
            matchResult
            startDate
            playerOfTheMatch
            playing11Status
            probable11Status
            playerID
            firstInningsTeamID
            secondInningsTeamID
            thirdInningsTeamID
            teamsWinProbability {
                homeTeamShortName
                homeTeamPercentage
                awayTeamShortName
                awayTeamPercentage
                tiePercentage
            }
            fourthInningsTeamID
            matchScore {
                teamShortName
                teamID
                teamFullName
                teamScore {
                    inning
                    inningNumber
                    battingTeam
                    runsScored
                    wickets
                    overs
                    runRate
                    battingSide
                    teamID
                    battingTeamShortName
                    declared
                    folowOn
                }
            }
            teamsWinProbability {
                homeTeamShortName
                homeTeamPercentage
                awayTeamShortName
                awayTeamPercentage
                tiePercentage
            }
            isCricklyticsAvailable
            isLiveCriclyticsAvailable
            isAbandoned
            currentDay
            currentSession
        }
    }
`}>
    {({loading, error, data}) => {
        if(loading) return <p>Loading ...</p>;
        if(error) return <p>Error :(</p>;
        
        return data.featurematch.map((item) => (
            <MatchCard match={item}/>
        ))
    }}
</Query>
);

export default MatchList;