import React from "react";
import "./App.css";
import { Router, RouteComponentProps } from "@reach/router";
import LeaguePage from "./components/LeaguePage";
import Homepage from "./components/Homepage";
import TeamPage from "./components/TeamPage";
import {UserProvider} from './UserContext'

function App() {
  return (
    <UserProvider>
    <Router>
      <RouterPage path="/" pageComponent={<Homepage />} />
      <RouterPage
        path="England"
        pageComponent={<LeaguePage nation="England" />}
      />
      <RouterPage path="Spain" pageComponent={<LeaguePage nation="Spain" />} />
      <RouterPage
        path="Germany"
        pageComponent={<LeaguePage nation="Germany" />}
      />
      <RouterPage
        path="France"
        pageComponent={<LeaguePage nation="France" />}
      />
      <RouterPage path="Italy" pageComponent={<LeaguePage nation="Italy" />} />
      <RouterPage path="/teams/:team_id" pageComponent={<TeamPage />} />
    </Router>
    </UserProvider>
  );
}

export default App;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
