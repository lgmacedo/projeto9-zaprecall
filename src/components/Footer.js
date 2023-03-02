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
  gameDone
}) {
  return (
    <FooterContainer data-test="footer" recallStart={recallStart} gameDone={gameDone}>
      <div data-test="finish-text">
        <FinalSuccess gameDone={gameDone}>
          <div>
            <img src={party} alt="happy-party"/>
            <p>Parabéns!</p>
          </div>
          <p>Você não esqueceu de nenhum flashcard!</p>
        </FinalSuccess>
        <FinalFailed gameDone={gameDone}>
          <div>
            <img src={sad} alt="sad-emoji"/>
            <p>Putz...</p>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
        </FinalFailed>
      </div>
      <p>
        {doneCards}/{totalCards} CONCLUÍDOS
      </p>
      <AnswersContainer>
        {answers.map((a) => (
          <img
            src={a === 1 ? icone1 : a === 2 ? icone2 : icone3}
            alt="answer-correct"
            data-test={
              a === 1 ? "no-icon" : a === 2 ? "partial-icon" : "zap-icon"
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
  img{
    width: 23px;
    height: 23px;
  }
`;

const FinalSuccess = styled.div`
  display: ${({ gameDone }) => (gameDone === 2 ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  row-gap: 14px;
  img{
    width: 23px;
    height: 23px;
  }
  p{
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    max-width: 222px;
    text-align: center;
  }
  div{
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  div p{
    font-weight: 700;
  }
`

const FinalFailed = styled.div`
  display: ${({ gameDone }) => (gameDone === 1 ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  row-gap: 14px;
  img{
    width: 23px;
    height: 23px;
  }
  p{
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    max-width: 222px;
    text-align: center;
  }
  div{
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  div p{
    font-weight: 700;
  }
`