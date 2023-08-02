import React from "react";
import icon from "./images/icon.svg";
import Camera from "./images/camera@2x.png";
import "./styles/Topnav.css";
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <>
      <nav>
        <div className="logo_bar">
          <div className="left">
            <img src={icon} alt="" />
          </div>
          <h3>Instaclone</h3>
        </div>
        <div className="right">
          <Link to="/newposts">
            <img src={Camera} alt="" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Topnav;
