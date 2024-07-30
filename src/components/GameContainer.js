import { useState, useEffect } from "react";
import styled from "styled-components";
import ScoreBar from "./ScoreBar";
import GameField from "./GameField";
import TurnTitle from "./TurnTitle";
import WinnerTitle from "./WinnerTitle";
import "./GameContainer.css";

const Field = styled.div`
  padding: 50px;
  border-radius: 30px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #2b0040;
  gap: 15px;
  align-self: center;
`;

const ButtonNewGame = styled.button`
  height: 50px;
  width: 100%;
  background-color: #f4f6f5;
  border-radius: 10px;
  padding: 30px 15px;
  font-family: "Fredoka", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-size: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &: hover {
    background-color: #c5a0d7;
  }
`;

const GameContainer = (props) => {
  const { data, setData, playersTurn, setPlayersTurn } = props;
  const [isGameStart, setIsGameStart] = useState(false);
  const [isFirstStart, setIsFirstStart] = useState(true);
  const [animationStyle, setAnimationStyle] = useState("");
  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);

  useEffect(() => {
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
      setIsGameStart(false);
      setDrawScore((state) => (state = state + 1));
      setPlayersTurn("Draw");
    }
  }, [data]);

  const animationBlink = () => {
    setAnimationStyle("animated");
    setTimeout(() => {
      setAnimationStyle("");
    }, 100);
  };

  const startGame = () => {
    setIsFirstStart(false);
    setIsGameStart(true);
    setData(() => {
      return ["", "", "", "", "", "", "", "", ""];
    });
    setPlayersTurn("X");
  };

  return (
    <Field onClick={animationBlink}>
      <ScoreBar
        playerXScore={playerXScore}
        playerOScore={playerOScore}
        drawScore={drawScore}
      />
      <GameField
        data={data}
        setData={setData}
        playersTurn={playersTurn}
        setPlayersTurn={setPlayersTurn}
        isGameStart={isGameStart}
        setIsGameStart={setIsGameStart}
      />
      {isFirstStart ? (
        <ButtonNewGame className={animationStyle} onClick={startGame}>
          New Game
        </ButtonNewGame>
      ) : isGameStart ? (
        <TurnTitle playersTurn={playersTurn} />
      ) : (
        <>
          <WinnerTitle playersTurn={playersTurn} />
          <ButtonNewGame onClick={startGame}>New Game</ButtonNewGame>
        </>
      )}
    </Field>
  );
};

export default GameContainer;
