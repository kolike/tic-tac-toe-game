import styled from "styled-components";

const PlayerOField = styled.div`
  width: 75px;
  height: 75px;
  background-color: #e2be00;
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

const PlayerO = (props) => {
  const playerOScore = props.playerOScore;
  return (
    <PlayerOField>
      <div> Player O</div>
      <ScoreValue> {playerOScore}</ScoreValue>
    </PlayerOField>
  );
};
export default PlayerO;
