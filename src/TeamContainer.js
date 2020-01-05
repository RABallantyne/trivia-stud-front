import React from "react";
import TeamItem from "./TeamItem";

export default function TeamContainer(props) {
  let scores = [];
  let createRow = () => {
    for (let i = 0; i < props.rounds; i++) {
      scores.push(0);
    }
  };
  createRow();
  let displayTeams = props.teams.map(team => {
    return (
      <TeamItem
        id={team.id}
        key={team.id}
        team={team}
        rounds={props.rounds}
        scores={scores}
      />
    );
  });
  return <div>{displayTeams}</div>;
}
