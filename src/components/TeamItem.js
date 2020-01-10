import React from "react";
import ScoreContainer from "./ScoreContainer";

export default function TeamItem(props) {
  return (
    <>
      <ScoreContainer team={props.team} updateScore={props.updateScore} />
    </>
  );
}
