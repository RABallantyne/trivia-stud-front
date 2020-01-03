import React from "react";

export default function TeamItem(props) {
  return (
    <div>
      <h2>{props.team.name}</h2>
      <h3>{props.team.scores}</h3>
    </div>
  );
}
