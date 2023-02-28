import {useState} from 'react';

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
    <div className="App">
      <Header/>
      <Deck cards = {cards} increaseDoneCards={increaseDoneCards}/>
      <Footer doneCards={doneCards} totalCards={cards.length}/>
    </div>
  );
}

export default App;
