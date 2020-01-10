import React from "react";
import ScoreRow from "./ScoreRow";

export default function ScoreContainer(props) {
  return (
    <>
      <ScoreRow team={props.team} updateScore={props.updateScore} />
    </>
  );
}
