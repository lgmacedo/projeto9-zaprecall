import {useState} from 'react';
import styled from 'styled-components';

import Deck from "./components/Deck";
import Header from "./components/Header";
import Footer from "./components/Footer";

import cards from './cards.js';

function App() {
  const [doneCards, setDoneCards] = useState(0);

  function increaseDoneCards(){
    setDoneCards(doneCards + 1);
  }

  console.log(doneCards);
  return (
    <AppContainer>
      <Header/>
      <Deck cards = {cards} increaseDoneCards={increaseDoneCards}/>
      <Footer doneCards={doneCards} totalCards={cards.length}/>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
