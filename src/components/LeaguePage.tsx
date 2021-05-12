import React, { useEffect, useState, useContext } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import { UserContext } from "../UserContext";
import SignOut from "./SignOut"

interface NationProps {
  nation: string;
}

export default function LeaguePage(props: NationProps) {
  const nation = props.nation;

  const [leagueTable, setLeagueTable] = useState([]);
  const [leagueScorers, setLeagueScorers] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true)

  useEffect((): any => {
    let leagueTableArray: [][] = [];
    return api
      .getLeagues(nation)
      .then((res) => {
        const updatedTable: [] = res.standings[0].table;
        leagueTableArray.push(updatedTable);
      })
      .then(() => {
        setLeagueTable(leagueTableArray[0]);
      });
  }, []);

  useEffect((): any => {
    let leagueScorersArray: [][] = [];
    return api
      .getLeagueScorers(nation)
      .then((res) => {
        const scorers: [] = res.scorers;
        leagueScorersArray.push(scorers);
      })
      .then(() => {
        setLeagueScorers(leagueScorersArray[0]);
      });
  }, []);
  return (
    <>
    {loading === true && <p>Loading</p>}
      <header>
      {user !== '' && <SignOut />}
        <button>
          <Link to="/">Home</Link>
        </button>
      </header>
      <main className="main-section-container">
        <div className="league-table-container">
          <h1 className="league-table-h1">League Table</h1>
          {leagueTable.map((team: any) => {
            return (
              <Link key={team.team.id} to={`/teams/${team.team.id}`} >
                <div className="league-item-container">
                  <ul >
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
