import styled from "styled-components";
import ScoreBar from "./ScoreBar";
import GameField from "./GameField";

const Field = styled.div`
  padding: 50px;
  border-radius: 30px;
  width: 280px;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #2b0040;
  gap: 15px;
  align-self: center;
`;

const GameContainer = () => {
  return (
    <Field>
      <ScoreBar />
      <GameField />
    </Field>
  );
};

export default GameContainer;
