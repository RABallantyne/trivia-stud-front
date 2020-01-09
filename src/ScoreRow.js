import React from "react";
import ScoreItem from "./ScoreItem";

export default function ScoreRow(props) {
  let displayScores = props.team.scores.map((score, index) => {
    return (
      <ScoreItem
        team={props.team}
        index={index}
        score={score}
        updateScore={props.updateScore}
      />
    );
  });

  return (
    <>
      {displayScores}
      {/* <h2>score: {props.team.total}</h2> */}
    </>
  );
}
