import { useState } from "react";
import styled from "styled-components";

import seta_play from '../assets/seta_play.png'

export default function Flashcard({ card, numero, increaseDoneCards }) {
  const [cardStatus, setCardStatus] = useState(1);
  return (
    <>
      <Flashcard1 cardStatus={cardStatus} onClick={increaseDoneCards}>
        <p>Pergunta {numero + 1}</p>
        <img src={seta_play} alt="start-play"/>
      </Flashcard1>
    </>
  );
}

const Flashcard1 = styled.div`
  display: ${({cardStatus})=>cardStatus === 1 ? "flex" : "none"};
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  p{
    margin-left: 15px;
  }
  img{
    width: 20px;
    height: 23px;
    margin-right: 15px;
    cursor: pointer;
  }
`
