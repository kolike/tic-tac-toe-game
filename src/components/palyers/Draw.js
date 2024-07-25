import styled from "styled-components";

const DrawField = styled.div`
  width: 75px;
  height: 75px;
  background-color: #bcdbf9;
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

const Draw = () => {
  return (
    <DrawField>
      <div> Draw</div>
      <ScoreValue> 0</ScoreValue>
    </DrawField>
  );
};
export default Draw;
