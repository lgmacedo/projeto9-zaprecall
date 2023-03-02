import styled from "styled-components";

import Flashcard from "./Flashcard";

export default function Deck({ recallStart, cards, increaseDoneCards, gameDone }) {
  return (
    <DeckContainer recallStart={recallStart} gameDone={gameDone}>
      {cards.map((c, i) => (
        <Flashcard key={i} card={c} numero={i} increaseDoneCards={increaseDoneCards} />
      ))}
    </DeckContainer>
  );
}

const DeckContainer = styled.div`
  margin-top: 51px;
  display: ${({ recallStart }) => (recallStart ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ gameDone }) => gameDone ? "170px" : "70px"};
  font-family: "Recursive", sans-serif;
`;
