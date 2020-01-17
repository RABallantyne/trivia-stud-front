import React from "react";
import TeamItem from "./TeamItem";

export default function TeamContainer(props) {
  let sortButtonDisplay = props.teams[0]
    ? props.teams[0].scores.map((score, i) => {
        return (
          <th>
            <button onClick={() => props.sortByScores(i)}>sort</button>
          </th>
        );
      })
    : null;

  let roundDisplay = props.teams[0]
    ? props.teams[0].scores.map((score, i) => {
        return <th>Round {i + 1}</th>;
      })
    : null;

  let teamDisplay = props.teams[0]
    ? props.teams.map(team => {
        return (
          <tr>
            <td>
              <h2>{team.name}</h2>
            </td>
            <TeamItem team={team} updateScore={props.updateScore} />
            <td>
              <h2>{team.total}</h2>
            </td>
          </tr>
        );
      })
    : null;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => props.sortTeams("name")}>sort</button>
          </th>
          {sortButtonDisplay}
          <th>
            <button onClick={() => props.sortTeams("total")}>sort</button>
          </th>
        </tr>
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
