import React from "react";
import "./topbar.css";
import { GrLanguage } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function Topbar() {
  return (
    <div className="Topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DIVERGENTES</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline />
            <span className="topIconbadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <GrLanguage />
            <span className="topIconbadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <AiFillSetting />
            <span className="topIconbadge">3</span>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
