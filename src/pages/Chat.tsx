import { useState } from "react";
import styled from "styled-components";
import Answer from "../components/Answer";

const Wrapper = styled.div`
`;

const Banner = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-size: cover;
  margin-top: 10vh;
`;

const ChatContent = styled.div`
  margin-bottom: 40vh;
`;

const Line = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  color: black;
`;

const ChatBox = styled.span`
  background: white;
  border: 1px solid rgb(72, 132, 227);
  border-radius: 8px;
  padding: 52px 58px 54px 51px;
  margin-bottom: 20px;
  gap: 30px;
  font-size: 22px;
  text-align: justify;
  align-items: flex-start;
`;


const ChatFormBox = styled.form`
  display: flex;
  opacity: 1;
  height: 100px;
`;

const ChatInputBox = styled.input`
  width: 90%;
  height: 100px;
  border: 1px solid rgb(72, 132, 227);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  text-align: center;
  :focus{
    outline: none;
  }
`;

const ChatSendButton = styled.button`
  width: 10%;
  height: 100px;
  border: 0;
  background-color: rgb(209, 215, 237);
`;


function Chat() {
  const [question, setQuestion] = useState<string>("안녕하세요");
  const sendSumit = (e: any) => {
    e.preventDefault();
    setQuestion(e.target[0].value)
  }

  return (
    <Wrapper>
      <Banner>
        <ChatContent>
          <Line>
            <ChatBox>{question}</ChatBox>
            <Answer question={question} />
          </Line>
        </ChatContent>
        <ChatFormBox onSubmit={sendSumit}>
          <ChatInputBox name="myText" />
          <ChatSendButton>
            보내기
          </ChatSendButton>
        </ChatFormBox>
      </Banner>
    </Wrapper>
  );
}

export default Chat;