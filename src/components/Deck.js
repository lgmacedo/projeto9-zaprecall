import styled from "styled-components";

import Flashcard from "./Flashcard";

export default function Deck({ recallStart, cards, increaseDoneCards }) {
  return (
    <DeckContainer recallStart={recallStart}>
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
  margin-bottom: 70px;
  font-family: "Recursive", sans-serif;
`;
