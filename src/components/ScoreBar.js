import { useState, useEffect } from "react";
import PlayerX from "./palyers/PlayerX";
import PlayerO from "./palyers/PlayerO";
import Draw from "./palyers/Draw";
import styled from "styled-components";

const ScoreBarField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ScoreBar = (props) => {
  const {
    data,
    setData,
    playersTurn,
    setPlayersTurn,
    isGameStart,
    setIsGameStart,
  } = props;

  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);

  useEffect(() => {
    debugger;
    if (
      (data[0] !== "" && data[0] === data[3] && data[3] === data[6]) ||
      (data[1] !== "" && data[1] === data[4] && data[4] === data[7]) ||
      (data[2] !== "" && data[2] === data[5] && data[5] === data[8]) ||
      (data[0] !== "" && data[0] === data[1] && data[1] === data[2]) ||
      (data[3] !== "" && data[3] === data[4] && data[4] === data[5]) ||
      (data[6] !== "" && data[6] === data[7] && data[7] === data[8]) ||
      (data[0] !== "" && data[0] === data[4] && data[4] === data[8]) ||
      (data[6] !== "" && data[6] === data[4] && data[4] === data[2])
    ) {
      setIsGameStart(false);

      if (playersTurn === "X") {
        setPlayerOScore((state) => (state = state + 1));
      } else {
        setPlayerXScore((state) => (state = state + 1));
      }
    } else if (data.every((elem) => elem !== "")) {
      setDrawScore((state) => (state = state + 1));
    }
  }, [data]);

  return (
    <ScoreBarField>
      <PlayerX playerXScore={playerXScore} />
      <Draw drawScore={drawScore} />
      <PlayerO playerOScore={playerOScore} />
    </ScoreBarField>
  );
};

export default ScoreBar;
