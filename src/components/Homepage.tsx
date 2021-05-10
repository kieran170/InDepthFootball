import React from "react";
import "../App.css";
import { Link } from "@reach/router";

export default function Homepage() {
  return (
    <>
      <div className="header">
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
