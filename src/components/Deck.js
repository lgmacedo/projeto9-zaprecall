import styled from "styled-components";

import Flashcard from "./Flashcard";

export default function Deck({cards, increaseDoneCards}) {
  return (
    <DeckContainer>
      {cards.map((c, i) => (
        <Flashcard card = {c} numero={i} increaseDoneCards={increaseDoneCards}/>
      ))}
    </DeckContainer>
  );
}

const DeckContainer = styled.div`
  margin-top: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  font-family: 'Recursive', sans-serif;
`
