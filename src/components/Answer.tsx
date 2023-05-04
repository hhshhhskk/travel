// import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { aiChat } from "../apis/api";

const ChatBox = styled.span`
  background: white;
  border: 1px solid rgb(72, 132, 227);
  border-radius: 8px;
  padding: 52px 58px 54px 51px;
  margin-bottom: 20px;
  min-height: 140px;
  gap: 30px;
  font-size: 22px;
  text-align: justify;
  align-items: flex-start;
`;

interface Iquestion {
    question: string,
}

function Answer(question: Iquestion) {
    const { isLoading, data: answerData } = useQuery(
        ["aiChat"],
        async () => {
            const answer = await aiChat(question);
            console.log("쿼리요청됨", answer.message.result.translatedText)
            return answer.message.result.translatedText;
        },
    );
    return (
        isLoading ? <ChatBox>{answerData}</ChatBox> : <ChatBox>Ai가 대답 하는중 입니다.</ChatBox>
    );
}

export default Answer;