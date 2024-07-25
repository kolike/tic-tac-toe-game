import styled from "styled-components";

const PlayerXField = styled.div`
  width: 75px;
  height: 75px;
  background-color: #48d2fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-size: 15px;
  color: black;
  border-radius: 5px;
`;

const ScoreValue = styled.div`
  font-size: 30px;
`;

const PlayerX = () => {
  return (
    <PlayerXField>
      <div> Player X</div>
      <ScoreValue> 0</ScoreValue>
    </PlayerXField>
  );
};

export default PlayerX;
