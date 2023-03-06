import { useState } from "react";
import styled from "styled-components";

import Deck from "./components/Deck";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";

import cards from "./cards.js";

function App() {
  const [recallStart, setRecallStart] = useState(false);
  const [doneCards, setDoneCards] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [gameDone, setGameDone] = useState(0);

  const gameDoneFlawed = 1;
  const gameDoneFlawless = 2;

  function startRecall() {
    setRecallStart(true);
  }

  function increaseDoneCards(resposta) {
    setDoneCards(doneCards + 1);
    const newAnswers = [...answers, resposta];
    setAnswers(newAnswers);
    if(newAnswers.length === cards.length){
      if(newAnswers.includes(1)){
        setGameDone(gameDoneFlawed);
      }else{
        setGameDone(gameDoneFlawless);
      }
    }
  }

  return (
    <AppContainer>
      <WelcomePage recallStart={recallStart} startRecall={startRecall}/>
      <Header recallStart={recallStart} />
      <Deck
        recallStart={recallStart}
        cards={cards}
        increaseDoneCards={increaseDoneCards}
        gameDone={gameDone}
      />
      <Footer
        recallStart={recallStart}
        doneCards={doneCards}
        totalCards={cards.length}
        answers={answers}
        gameDone={gameDone}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
