import styled from "styled-components";

import icone1 from "../assets/icone_erro.png";
import icone2 from "../assets/icone_quase.png";
import icone3 from "../assets/icone_certo.png";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Footer({
  recallStart,
  doneCards,
  totalCards,
  answers,
  gameDone,
}) {
  const wrongAnswer = 1;
  const almostRightAnswer = 2;

  const finalJogo = [
    {
      image: sad,
      title: "Putz...",
      text: "Ainda faltam alguns... Mas não desanime!",
    },
    {
      image: party,
      title: "Parabéns!",
      text: "Você não esqueceu de nenhum flashcard!",
    },
  ];
  return (
    <FooterContainer
      data-test="footer"
      recallStart={recallStart}
      gameDone={gameDone}
    >
      <GameFinal data-test="finish-text" gameDone={gameDone}>
        <div>
          <img
            src={gameDone === 1 ? finalJogo[0].image : finalJogo[1].image}
            alt="happy-party"
          />
          <p>{gameDone === 1 ? finalJogo[0].title : finalJogo[1].title}</p>
        </div>
        <p>{gameDone === 1 ? finalJogo[0].text : finalJogo[1].text}</p>
      </GameFinal>
      <p>
        {doneCards}/{totalCards} CONCLUÍDOS
      </p>
      <AnswersContainer>
        {answers.map((a) => (
          <img
            src={a === wrongAnswer ? icone1 : a === almostRightAnswer ? icone2 : icone3}
            alt="answer-correct"
            data-test={
              a === wrongAnswer ? "no-icon" : a === almostRightAnswer ? "partial-icon" : "zap-icon"
            }
          />
        ))}
      </AnswersContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  min-height: 70px;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  line-height: 22px;
  display: ${({ recallStart }) => (recallStart ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  padding: ${({ gameDone }) => (gameDone ? "0 0 10px" : "0")};
`;

const AnswersContainer = styled.div`
  display: flex;
  margin-top: 5px;
  column-gap: 5px;
  img {
    width: 23px;
    height: 23px;
  }
`;

const GameFinal = styled.div`
  display: ${({ gameDone }) => (gameDone ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  row-gap: 14px;
  img {
    width: 23px;
    height: 23px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    max-width: 222px;
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  div p {
    font-weight: 700;
  }
`;
