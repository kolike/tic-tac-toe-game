import { useEffect, useState } from "react";
import Cell from "./Cell";
import styled from "styled-components";

const GameFieldStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const GameField = (props) => {
  const {
    data,
    setData,
    playersTurn,
    setPlayersTurn,
    isGameStart,
    setIsGameStart,
  } = props;

  const elements = data.map((item, i) => {
    return (
      <Cell
        key={i}
        id={i}
        value={item}
        setData={setData}
        playersTurn={playersTurn}
        setPlayersTurn={setPlayersTurn}
        isGameStart={isGameStart}
      />
    );
  });

  return <GameFieldStyle>{elements}</GameFieldStyle>;
};

export default GameField;
