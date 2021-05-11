import axios from "axios";

export const getLeagues = (nation: string) => {
  let leagueNumber: string = "";
  function phoneticLookup(val: string) {
    const lookup: any = {
      England: "2021",
      Spain: "2014",
      Italy: "2019",
      France: "2015",
      Germany: "2002",
    };
    leagueNumber = lookup[val];
  }

  phoneticLookup(nation);
  return axios
    .get(
      `http://api.football-data.org/v2/competitions/${leagueNumber}/standings`,
      {
        headers: { "X-Auth-Token": "bb5c9f0b8e1a442ea833002ce9111d90" },
      }
    )
    .then(({ data }) => {
      return data;
    });
};

export const getLeagueScorers = (nation: string) => {
  let leagueCode: string = "";

  function phoneticLookup(val: any) {
    const lookup: any = {
      England: "PL",
      Spain: "PD",
      Italy: "SA",
      France: "FL1",
      Germany: "BL1",
    };
    leagueCode = lookup[val];
  }

  phoneticLookup(nation);
  return axios
    .get(`http://api.football-data.org/v2/competitions/${leagueCode}/scorers`, {
      headers: { "X-Auth-Token": "bb5c9f0b8e1a442ea833002ce9111d90" },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getTeamData = (teamId: string) => {
  return axios
    .get(`http://api.football-data.org/v2/teams/${teamId}`, {
      headers: { "X-Auth-Token": "bb5c9f0b8e1a442ea833002ce9111d90" },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getFixtures = (teamId: string) => {
  return axios
    .get(`http://api.football-data.org/v2/teams/${teamId}/matches`, {
      headers: { "X-Auth-Token": "bb5c9f0b8e1a442ea833002ce9111d90" },
    })
    .then(({ data }) => {
      return data;
    });
};
