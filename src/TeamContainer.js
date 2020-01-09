import React from "react";
import TeamItem from "./TeamItem";

export default function TeamContainer(props) {
  let roundDisplay = props.teams[0]
    ? props.teams[0].scores.map((score, i) => {
        return <th>Round {i + 1}</th>;
      })
    : null;

  let teamDisplay = props.teams[0]
    ? props.teams.map(team => {
        return (
          <tr>
            <td>{team.name}</td>
            <TeamItem team={team} updateScore={props.updateScore} />
            <td>{team.total}</td>
          </tr>
        );
      })
    : null;

  console.log(props.teams);

  return (
    <table>
      <thead>
        <tr>
          <th>Team Name</th>
          {roundDisplay}
          <th>Total Score</th>
        </tr>
      </thead>
      <tbody>{teamDisplay}</tbody>
    </table>
  );
}
