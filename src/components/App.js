import { useState } from "react";
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

  @media (max-width: 720px) {
    gap: 0;
  }
  @media (min-width: 720px) and (max-width: 1280px) {
    gap: 100px;
  }
  @media (min-width: 1280px) {
    gap: 300px;
  }
`;

function App() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playersTurn, setPlayersTurn] = useState("X");

  return (
    <Wrapper>
      <Container>
        <TitleComponent />
        <GameContainer
          data={data}
          setData={setData}
          playersTurn={playersTurn}
          setPlayersTurn={setPlayersTurn}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
