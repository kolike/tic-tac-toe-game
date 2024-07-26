import styled from "styled-components";

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
  &: hover {
    background-color: ${(props) =>
      props.$isGameStart ? "#5a1e76;" : "#43115b"};
  }
`;

const CellText = styled.div`
  color: ${(props) => (props.$inputColor === "X" ? "#48d2fe" : "#e2be00")};
`;

const Cell = (props) => {
  const { value, id, setData, playersTurn, setPlayersTurn, isGameStart } =
    props;

  const changeValue = () => {
    if (isGameStart) {
      setData((state) => {
        const result = [...state];
        if (playersTurn === "X" && value !== "X" && value !== "O") {
          result[id] = "X";
          setPlayersTurn("O");
        } else if (playersTurn === "O" && value !== "X" && value !== "O") {
          result[id] = "O";
          setPlayersTurn("X");
        }
        return result;
      });
    }
  };

  return (
    <CellField onClick={changeValue} $isGameStart={isGameStart}>
      <CellText $inputColor={value}>{`${value}`}</CellText>
    </CellField>
  );
};

export default Cell;
