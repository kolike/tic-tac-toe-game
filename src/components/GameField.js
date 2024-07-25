import { useState } from "react";
import Cell from "./Cell";
import styled from "styled-components";

const GameFieldStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const GameField = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const [playersTurn, setPlayersTurn] = useState("X");

  const elements = data.map((item, i) => {
    return (
      <Cell
        key={i}
        id={i}
        value={item}
        data={data}
        setData={setData}
        playersTurn={playersTurn}
        setPlayersTurn={setPlayersTurn}
      />
    );
  });
  return <GameFieldStyle>{elements}</GameFieldStyle>;
};

export default GameField;
