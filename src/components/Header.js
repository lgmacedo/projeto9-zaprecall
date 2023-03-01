import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header({ recallStart }) {
  return (
    <HeaderContainer recallStart={recallStart}>
      <img src={logo} alt="zaprecall-logo" />
      <h1>ZapRecall</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: ${({ recallStart }) => (recallStart ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
  }
  h1 {
    font-family: "Righteous", cursive;
    color: #ffffff;
    font-weight: 400;
    font-size: 36px;
    line-height: 44.7px;
  }
`;
