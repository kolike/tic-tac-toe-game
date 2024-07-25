import styled from "styled-components";
import GameContainer from "./GameContainer";
import TitleComponent from "./TitleComponent";

const Wrapper = styled.div`
  background-color: #000000;
  position: fixed;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #5a1e76;
  border-radius: 75px;
  gap: 250px;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <TitleComponent />
        <GameContainer />
      </Container>
    </Wrapper>
  );
}

export default App;
