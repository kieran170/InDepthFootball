import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "@reach/router";
import * as api from "../api";
import { Link } from "@reach/router";
import {UserContext} from '../UserContext'
import SignOut from "./SignOut"

export default function TeamPage() {
  const location = useLocation();
  const [teamData, setTeamData]: any = useState([]);
  const [fixtures, setFixtures]: any  = useState([]);
  const [user, setUser] = useContext(UserContext)

  const teamId = location.pathname.slice(7);

  useEffect((): any => {
    let teamDataNew: object[];
    return api
      .getTeamData(teamId)
      .then((res) => {
        const teamInfo = res;
        teamDataNew = teamInfo;
      })
      .then(() => {
        setTeamData(teamDataNew);
      });
  }, []);

  useEffect((): any => {
    let fixturesArray: object[];
    return api
      .getFixtures(teamId)
      .then((res) => {
        fixturesArray = res.matches;
      })
      .then(() => {
        setFixtures(fixturesArray);
      });
  }, []);

  const roster = teamData.squad;

  const findWinner: any = (winner: string) => {};

  return (
    <>
    {user !== '' && <SignOut />}
      <button>
        <Link to="/">Home</Link>
      </button>
      <div className="teampage-header">
        <img src={teamData.crestUrl} alt="teampage-badge" />
        <h1>{teamData.name} </h1>
      </div>
      <div className="teampage-lists-container">
        {roster && (
          <div className="teampage-list">
            <h2>Team Roster</h2>
            {roster.map((playerInfo: any) => {
              return (
                <ul key={playerInfo.id}>
                  <li>{playerInfo.name}</li>
                  <li>{playerInfo.position}</li>
                  <li>{playerInfo.nationality}</li>
                </ul>
              );
            })}
          </div>
        )}
        {fixtures && (
          <div className="teampage-list">
            <h2>Fixtures</h2>
            {fixtures.map((fixture: any) => {
              return (
                <ul key={fixture.id}>
                  <li>
                    <h4>{fixture.competition.name}</h4> {fixture.homeTeam.name}
                    {fixture.score.fullTime.homeTeam}
                    {fixture.awayTeam.name}
                    {fixture.score.fullTime.awayTeam}
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
