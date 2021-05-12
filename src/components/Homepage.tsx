import React, {useContext} from "react";
import "../App.css";
import { Link } from "@reach/router";
import AddUser from './AddUser'
import { UserContext } from "../UserContext";
import SignOut from "./SignOut"

export default function Homepage() {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <div className="header">
      {user !== '' && <SignOut />}
      {user === '' && <AddUser />}
        <h1 className="logo">Football Indepth</h1>
      </div>
      <section className="main-homepage-form">
        <h1 className="homepage-page-header">Pick your country</h1>
        <ul className="homepage-list">
          <li className="homepage-list-items">
            <Link to="/England">England</Link>
          </li>
          <li className="homepage-list-items">
            <Link to="/Spain">Spain</Link>
          </li>
          <li className="homepage-list-items">
            <Link to="/Germany">Germany</Link>
          </li>
          <li className="homepage-list-items">
            <Link to="/France">France</Link>
          </li>
          <li className="homepage-list-items-italy">
            <Link to="/Italy">Italy</Link>
          </li>
        </ul>
      </section>

    </>
  );
}
