import React from "react";
import ScoreItem from "./ScoreItem";

export default function ScoreRow(props) {
  let displayScores = props.scores.map(score => {
    return <ScoreItem score={score} />;
  });
  return <div>{displayScores}</div>;
}
