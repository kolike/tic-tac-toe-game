import { useState } from "react";
import styled, { keyframes } from "styled-components";
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
        data={data}
        setPlayersTurn={setPlayersTurn}
        playersTurn={playersTurn}
        isGameStart={isGameStart}
        setIsGameStart={setIsGameStart}
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
