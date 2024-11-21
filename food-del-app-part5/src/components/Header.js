import mainLogo from "../../assets/app-logo.jpg";
import { useState } from "react";
import * as ReactRouterDOM from "react-router-dom";
import useOnline from "../utils/useOnline";

// const loggedInUser = () => {
//   // API call to check authentication
//   return false;
// };
console.log(ReactRouterDOM);
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={mainLogo} />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li className="right-margin">
            <ReactRouterDOM.Link to="/">Home</ReactRouterDOM.Link>
          </li>
          <ReactRouterDOM.Link to="/about">
            <li className="right-margin">About</li>
          </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/contact">
            <li className="right-margin">Contact</li>
          </ReactRouterDOM.Link>
          <li className="right-margin">Cart</li>
          <ReactRouterDOM.Link to="/instamart">
            <li className="right-margin">Instamart</li>
          </ReactRouterDOM.Link>
        </ul>
      </div>
      <h4>User is:{isOnline ? "✅" : "🔴"}</h4>
      {isLoggedIn ? (
        <button className="login-button" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="login-button" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
