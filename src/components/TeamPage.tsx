import React, {useEffect, useState} from "react";
import { useLocation } from "@reach/router"
import * as api from "../api";
import { Link } from "@reach/router";

export default function TeamPage() {

  const location = useLocation()
  const [teamData, setTeamData]: any = useState([])

  useEffect((): any => {
    const teamId = location.pathname.slice(7)
    let teamDataNew: object[] = [] ;
    let squadData: object[] = []
    return api.getTeamData(teamId).then((res) => {
      const teamInfo = res
      teamDataNew.push(teamInfo)
      squadData.push(teamData.squad)
    }).then(() => {
      setTeamData(teamDataNew[0])
    })
  },[])

  const roster = teamData.squad

  return (
    <>
    <button>
          <Link to="/">Home</Link>
        </button>
    <div className='teampage-header'>
      <img src={teamData.crestUrl} alt='teampage-badge'/>
      <p>{teamData.name} </p>
    </div>
    <div>
      {roster && (
        <>
        <h2>Team Roster</h2>
        {roster.map((playerInfo: any) => {
          console.log(roster)
          return (
            <ul>
              <li>{playerInfo.name}</li>
              <li>{playerInfo.position}</li>
              <li>{playerInfo.nationality}</li>
              </ul>
          )
        })}
        </>
      )}
    </div>
    </>
  );
}
