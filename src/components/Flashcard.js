import { useState } from "react";
import styled from "styled-components";

import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";

export default function Flashcard({ card, numero, increaseDoneCards }) {
  const [cardStatus, setCardStatus] = useState(1);
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
        <img src={seta_virar} alt="turn-card-over" onClick={() => setCardStatus(cardStatus + 1)}/>
      </Flashcard2>
      <Flashcard3 cardStatus={cardStatus}>
        <p>{card.answer}</p>
        <div>
          <div>Não lembrei</div>
          <div>Quase não lembrei</div>
          <div>Zap!</div>
        </div>
      </Flashcard3>
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
    color: #333333
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
  div{
    display: flex;
    align-items: center;
    color: white;
    margin: 10px auto 10px;
    column-gap: 7.74px;
  }
  div div:nth-child(1), div div:nth-child(2), div div:nth-child(3){
    min-width: 85px;
    max-width: 85px;
    height: 37px;
    background-color: #FF3030;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  div div:nth-child(1){
    background-color: #FF3030;
  }
  div div:nth-child(2){
    background-color: #FF922E;
  }
  div div:nth-child(3){
    background-color: #2FBE34;
  }
`;
