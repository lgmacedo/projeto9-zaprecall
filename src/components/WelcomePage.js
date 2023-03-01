import styled from "styled-components";
import logo from "../assets/logo.png";

export default function WelcomePage({ recallStart, startRecall }) {
  return (
    <WelcomePageContainer recallStart={recallStart}>
      <img src={logo} alt="zaprecall-logo" />
      <h1>ZapRecall</h1>
      <button data-test="start-btn" onClick={startRecall}>Iniciar Recall!</button>
    </WelcomePageContainer>
  );
}

const WelcomePageContainer = styled.div`
  display: ${({ recallStart }) => (recallStart ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 148px;
    width: 136px;
    height: 161px;
  }
  h1 {
    font-family: "Righteous", cursive;
    color: #ffffff;
    font-weight: 400;
    font-size: 36px;
    line-height: 44.7px;
    margin-top: 20px;
  }
  button {
    font-family: "Recursive", sans-serif;
    color: #d70900;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    width: 246px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 35px;
    cursor: pointer;
  }
`;
