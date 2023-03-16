import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month < 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    title: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    title: "Burr, it is chilly",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { title, iconName } = seasonConfig[season];

  return (
    <div className={`${season} season-display`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{title}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
