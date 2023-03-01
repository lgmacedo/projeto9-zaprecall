import { useState } from "react";
import styled from "styled-components";

import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone1 from "../assets/icone_erro.png";
import icone2 from "../assets/icone_quase.png";
import icone3 from "../assets/icone_certo.png";

export default function Flashcard({ card, numero, increaseDoneCards }) {
  const [cardStatus, setCardStatus] = useState(1);
  const [cardFinal, setCardFinal] = useState(0);

  const icones = [icone1, icone2, icone3];

  function closeCard(answer) {
    setCardStatus(cardStatus + 1);
    increaseDoneCards();
    setCardFinal(answer);
  }
  return (
    <>
      <Flashcard1 cardStatus={cardStatus}>
        <p>Pergunta {numero + 1}</p>
        <img
          src={seta_play}
          alt="start-play"
          onClick={() => setCardStatus(cardStatus + 1)}
        />
      </Flashcard1>
      <Flashcard2 cardStatus={cardStatus}>
        <p>{card.question}</p>
        <img
          src={seta_virar}
          alt="turn-card-over"
          onClick={() => setCardStatus(cardStatus + 1)}
        />
      </Flashcard2>
      <Flashcard3 cardStatus={cardStatus}>
        <p>{card.answer}</p>
        <div>
          <div onClick={() => closeCard(1)}>Não lembrei</div>
          <div onClick={() => closeCard(2)}>Quase não lembrei</div>
          <div onClick={() => closeCard(3)}>Zap!</div>
        </div>
      </Flashcard3>
      <Flashcard4 cardStatus={cardStatus} cardFinal={cardFinal}>
        <p>Pergunta {numero + 1}</p>
        <img src={icones[cardFinal - 1]} alt="card-answer" />
      </Flashcard4>
    </>
  );
}

const Flashcard1 = styled.div`
  display: ${({ cardStatus }) => (cardStatus === 1 ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p {
    margin-left: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
    color: #333333;
  }
  img {
    width: 20px;
    height: 23px;
    margin-right: 15px;
    cursor: pointer;
  }
`;

const Flashcard2 = styled.div`
  display: ${({ cardStatus }) => (cardStatus === 2 ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  min-height: 130px;
  background-color: #ffffd4;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p {
    margin-top: 18px;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #333333;
  }
  img {
    width: 30px;
    height: 20px;
    margin-left: 85%;
    margin-bottom: 3%;
    cursor: pointer;
  }
`;

const Flashcard3 = styled.div`
  display: ${({ cardStatus }) => (cardStatus === 3 ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  min-height: 130px;
  background-color: #ffffd4;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p {
    margin-top: 18px;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #333333;
  }
  img {
    width: 30px;
    height: 20px;
    margin-left: 85%;
    margin-bottom: 3%;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    color: white;
    margin: 10px auto 10px;
    column-gap: 7.74px;
  }
  div div:nth-child(1),
  div div:nth-child(2),
  div div:nth-child(3) {
    min-width: 85px;
    max-width: 85px;
    height: 37px;
    background-color: #ff3030;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  div div:nth-child(1) {
    background-color: #ff3030;
  }
  div div:nth-child(2) {
    background-color: #ff922e;
  }
  div div:nth-child(3) {
    background-color: #2fbe34;
  }
`;

const Flashcard4 = styled.div`
  display: ${({ cardStatus }) => (cardStatus === 4 ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p {
    margin-left: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
    color: ${({cardFinal})=>cardFinal === 3 ? "#2FBE34" : (cardFinal === 2 ? "#FF922E" : "#FF3030")};
    text-decoration-line: line-through;
  }
  img {
    width: 23px;
    height: 23px;
    margin-right: 15px;
    cursor: pointer;
  }
`;
