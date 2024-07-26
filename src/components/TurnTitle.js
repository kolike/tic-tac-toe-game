import styled from "styled-components";

const TurnTitleField = styled.div`
  background-color: ${(props) =>
    props.$inputColor === "X" ? "#48d2fe" : "#e2be00"};
  height: 50px;
  width: 100%;
  border-radius: 10px;
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
`;

const TurnTitle = ({ playersTurn }) => {
  return (
    <TurnTitleField $inputColor={playersTurn}>
      {playersTurn} turn
    </TurnTitleField>
  );
};

export default TurnTitle;
