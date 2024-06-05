import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/me.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={pfp}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Steven Le</div>
            <div className="brief_description">
            Hey, my name's Steven! I'm attending San Jose State University (SJSU) majoring in computer science as I work towards a career in software engineering! Currently, I'm the treasurer and a development team lead for SJSU's Software and Computer Engineering Society; we make a lot of cool projects!
            </div>
          </div>
        </div>
      </div>
    )
  }
}