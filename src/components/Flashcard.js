import { useState } from "react";

import seta_play from '../assets/seta_play.png'

export default function Flashcard({ card, numero, increaseDoneCards }) {
  const [cardStatus, setCardStatus] = useState(1);
  return (
    <>
      <div onClick={increaseDoneCards} className={cardStatus === 1 ? "Flashcard1" : "Flashcard1 hidden"}>
        <p>Pergunta {numero + 1}</p>
        <img src={seta_play} alt="start-play"/>
      </div>
      <div onClick={increaseDoneCards} className={cardStatus === 2 ? "Flashcard2" : "Flashcard2 hidden"}>
        Pergunta {numero + 1}
      </div>
      <div onClick={increaseDoneCards} className={cardStatus === 3 ? "Flashcard3" : "Flashcard3 hidden"}>
        Pergunta {numero + 1}
      </div>
      <div onClick={increaseDoneCards} className={cardStatus === 4 ? "Flashcard4" : "Flashcard4 hidden"}>
        Pergunta {numero + 1}
      </div>
    </>
  );
}
