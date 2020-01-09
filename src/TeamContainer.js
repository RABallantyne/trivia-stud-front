import React from "react";
import TeamItem from "./TeamItem";

export default function TeamContainer(props) {
  let displayTeams = props.teams.map(team => {
    return (
      <TeamItem
        id={team.id}
        key={team.id}
        team={team}
        rounds={props.rounds}
        updateScore={props.updateScore}
      />
    );
  });
  return <div>{displayTeams}</div>;
}
