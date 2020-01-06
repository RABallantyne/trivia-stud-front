import React from "react";
import ScoreRow from "./ScoreRow";

export default function ScoreContainer(props) {
  console.log(props);
  return (
    <div>
      <ScoreRow team={props.team} rounds={props.rounds} />
    </div>
  );
}
