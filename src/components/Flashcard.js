import { useState } from "react";
import styled from "styled-components";

import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone1 from "../assets/icone_erro.png";
import icone2 from "../assets/icone_quase.png";
import icone3 from "../assets/icone_certo.png";

export default function Flashcard({ card, numero, increaseDoneCards }) {
  const firstCardStatus = 1;
  const secondCardStatus = 2;
  const thirdCardStatus = 3;
  const fourthCardStatus = 4;

  const wrongAnswer = 1;
  const almostRightAnswer = 2;
  const rightAnswer = 3;

  const [cardStatus, setCardStatus] = useState(1);
  const [cardFinal, setCardFinal] = useState(0);

  function closeCard(answer) {
    setCardStatus(cardStatus + 1);
    increaseDoneCards(answer);
    setCardFinal(answer);
  }
  return (
    <div data-test="flashcard">
      <Flashcard1 cardStatus={cardStatus} firstCardStatus={firstCardStatus}>
        <p data-test="flashcard-text">Pergunta {numero + 1}</p>
        <img
          data-test="play-btn"
          src={seta_play}
          alt="start-play"
          onClick={() => setCardStatus(cardStatus + 1)}
        />
      </Flashcard1>
      <Flashcard2 cardStatus={cardStatus} secondCardStatus={secondCardStatus}>
        <p data-test="flashcard-text">{card.question}</p>
        <img
          data-test="turn-btn"
          src={seta_virar}
          alt="turn-card-over"
          onClick={() => setCardStatus(cardStatus + 1)}
        />
      </Flashcard2>
      <Flashcard3 cardStatus={cardStatus} thirdCardStatus={thirdCardStatus}>
        <p data-test="flashcard-text">{card.answer}</p>
        <div>
          <div data-test="no-btn" onClick={() => closeCard(wrongAnswer)}>
            Não lembrei
          </div>
          <div
            data-test="partial-btn"
            onClick={() => closeCard(almostRightAnswer)}
          >
            Quase não lembrei
          </div>
          <div data-test="zap-btn" onClick={() => closeCard(rightAnswer)}>
            Zap!
          </div>
        </div>
      </Flashcard3>
      <Flashcard4
        cardStatus={cardStatus}
        cardFinal={cardFinal}
        fourthCardStatus={fourthCardStatus}
        almostRightAnswer={almostRightAnswer}
        rightAnswer={rightAnswer}
      >
        <p data-test="flashcard-text">Pergunta {numero + 1}</p>
        <Errado
          data-test="no-icon"
          cardFinal={cardFinal}
          src={icone1}
          alt="card-answer"
          wrongAnswer={wrongAnswer}
        />
        <Quase
          data-test="partial-icon"
          cardFinal={cardFinal}
          src={icone2}
          alt="card-answer"
          almostRightAnswer={almostRightAnswer}
        />
        <Certo
          data-test="zap-icon"
          cardFinal={cardFinal}
          src={icone3}
          alt="card-answer"
          rightAnswer={rightAnswer}
        />
      </Flashcard4>
    </div>
  );
}

const Flashcard1 = styled.div`
  display: ${({ cardStatus, firstCardStatus }) =>
    cardStatus === firstCardStatus ? "flex" : "none"};
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
  display: ${({ cardStatus, secondCardStatus }) =>
    cardStatus === secondCardStatus ? "flex" : "none"};
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
  display: ${({ cardStatus, thirdCardStatus }) =>
    cardStatus === thirdCardStatus ? "flex" : "none"};
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
  display: ${({ cardStatus, fourthCardStatus }) =>
    cardStatus === fourthCardStatus ? "flex" : "none"};
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
    color: ${({ cardFinal, almostRightAnswer, rightAnswer }) =>
      cardFinal === rightAnswer
        ? "#2FBE34"
        : cardFinal === almostRightAnswer
        ? "#FF922E"
        : "#FF3030"};
    text-decoration-line: line-through;
  }
`;

const Errado = styled.img`
  display: ${({ cardFinal, wrongAnswer }) =>
    cardFinal === wrongAnswer ? "flex" : "none"};
  width: 23px;
  height: 23px;
  margin-right: 15px;
  cursor: pointer;
`;

const Quase = styled.img`
  display: ${({ cardFinal, almostRightAnswer }) =>
    cardFinal === almostRightAnswer ? "flex" : "none"};
  width: 23px;
  height: 23px;
  margin-right: 15px;
  cursor: pointer;
`;

const Certo = styled.img`
  display: ${({ cardFinal, rightAnswer }) =>
    cardFinal === rightAnswer ? "flex" : "none"};
  width: 23px;
  height: 23px;
  margin-right: 15px;
  cursor: pointer;
`;
