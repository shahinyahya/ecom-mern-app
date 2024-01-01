import { Link } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";
import BENNA from "../../assets/benna.jpg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="logo">
            <span className="logo">Ecomiti DashBoard</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={BENNA} alt="benna pic" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
