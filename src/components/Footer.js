import styled from "styled-components";
import icone1 from "../assets/icone_erro.png";
import icone2 from "../assets/icone_quase.png";
import icone3 from "../assets/icone_certo.png";

export default function Footer({
  recallStart,
  doneCards,
  totalCards,
  answers,
}) {
  return (
    <FooterContainer data-test="footer" recallStart={recallStart}>
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
`;

const AnswersContainer = styled.div`
  display: flex;
  margin-top: 5px;
  column-gap: 5px;
`;
