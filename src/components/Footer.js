import styled from "styled-components";

export default function Footer({ doneCards, totalCards }) {
  return (
    <FooterContainer>
      <p>
        {doneCards}/{totalCards} CONCLUÍDOS
      </p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 70px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;
