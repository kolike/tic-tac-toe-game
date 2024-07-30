import styled from "styled-components";

const WinnerTitleField = styled.div`
  width: 100%;
  height: 30px;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-size: 15px;
  color: white;
  border-radius: 5px;
`;

const WinnerTitle = ({ playersTurn }) => {
  return (
    <WinnerTitleField>
      Game Over!
      {playersTurn === "Draw"
        ? " It's Draw!"
        : ` Player ${playersTurn === "X" ? "O" : "X"} Wins!`}
    </WinnerTitleField>
  );
};

export default WinnerTitle;
