import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import * as api from "../api";

interface NationProps {
  nation: string;
}

export default function LeaguePage(props: NationProps) {
  const nation = props.nation;

  const [leagueTable, setLeagueTable] = useState([]);
  const [leagueScorers, setLeagueScorers] = useState([]);

  useEffect((): any => {
    let leagueTableArray: any = [];
    return api
      .getLeagues(nation)
      .then((res) => {
        const updatedTable = res.standings[0].table;
        leagueTableArray.push(updatedTable);
      })
      .then(() => {
        setLeagueTable(leagueTableArray[0]);
      });
  }, []);

  useEffect((): any => {
    let leagueScorersArray: any = [];
    return api
      .getLeagueScorers(nation)
      .then((res) => {
        const scorers = res.scorers;
        leagueScorersArray.push(scorers);
      })
      .then(() => {
        setLeagueScorers(leagueScorersArray[0]);
      });
  }, []);
  return (
    <>
      <header>
        <button>
          <Link to="/">Home</Link>
        </button>
      </header>
      <main className="main-section-container">
        <div className="league-table-container">
          <h1 className="league-table-h1">League Table</h1>
          {leagueTable.map((team: any) => {
            return (
              <Link to={`/teams/${team.team.id}`}>
                <div className="league-item-container">
                  <ul key={team.team.id}>
                    <li>{team.position}</li>
                    <img
                      className="football-crest"
                      src={team.team.crestUrl}
                      alt="team badge"
                    />
                    <li>{team.team.name}</li>
                    <li>Games Played: {team.playedGames}</li>
                    <li> Points: {team.points}</li>
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="league-table-container">
          <h1>League Scorers</h1>
          {leagueScorers.map((players: any) => {
            return (
              <div>
                <ul key={players.player.id}>
                  <li>{players.player.name}</li>
                  <li>{players.team.name}</li>
                  <li>{players.numberOfGoals}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
