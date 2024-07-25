import styled from "styled-components";
import { useEffect } from "react";

const CellField = styled.div`
  width: 75px;
  height: 75px;
  background-color: #43115b;
  border-radius: 5px;
  font-size: 50px;
  font-family: "Fredoka", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CellText = styled.div`
  color: ${(props) => (props.$inputColor === "X" ? "#48d2fe" : "#e2be00")};
`;

const Cell = (props) => {
  const { value, id, setData, playersTurn, setPlayersTurn } = props;

  useEffect(() => {
    if (playersTurn === "X") {
      setPlayersTurn((state) => (state = "O"));
    } else {
      setPlayersTurn((state) => (state = "X"));
    }
  }, [value]);

  const changeValue = () => {
    setData((state) => {
      const arr = [...state];
      if (playersTurn === "O") {
        arr[id] = "X";
      } else if (playersTurn === "X") {
        arr[id] = "O";
      }
      return arr;
    });
  };

  return (
    <CellField onClick={changeValue}>
      <CellText $inputColor={value}>{`${value}`}</CellText>
    </CellField>
  );
};

export default Cell;
