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

const ScoreBar = () => {
  return (
    <ScoreBarField>
      <PlayerX />
      <Draw />
      <PlayerO />
    </ScoreBarField>
  );
};

export default ScoreBar;
