import styled from "styled-components";

const OddTitle = styled.div`
  margin-bottom: -50px;
  margin-left: -25px;
  color: #dcbf3f;
  font-family: "Fredoka", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-size: 200px;
`;
const EvenTitle = styled.div`
  margin: -95px 0px -145px -30px;
  color: #72cff9;
  font-family: "Fredoka", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-size: 200px;
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const TitleComponent = () => {
  return (
    <Title>
      <OddTitle> tic.</OddTitle>
      <EvenTitle>tac.</EvenTitle>
      <OddTitle> toe.</OddTitle>
    </Title>
  );
};

export default TitleComponent;
