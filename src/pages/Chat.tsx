import React, { useState } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatBox = styled.div`
  width: 90%;
  height: 70%;
  margin-top: 10%;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f0f0f0;
`;

const MessageContainer = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const UserMessage = styled.div`
  color: #007bff;
  font-size: 33px;
  font-weight: bold;
`;

const AIMessage = styled.div`
  color: #28a745;
  font-size: 33px;
  font-weight: bold;
`;

const FormBox = styled.form`
  width:90%;
`

const MessageInput = styled.input`
  width: 80%;
  height: 150px;
  padding: 8px;
  font-size: 33px;
  margin-top: 10px;
  border: 1px solid rgb(209, 215, 237);
  text-align: center;
  :focus{
     outline: none;
  }
`;

const SendButton = styled.button`
  width: 20%;
  height: 150px;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #f1444f;
  font-size: 33px;
  color: #fff;
  border: none;
  cursor: pointer;
`;



const Chat: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ user: string; message: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prompt = userInput;
    const max_tokens = 120;
    const n = 1;
    try {
      const response = await fetch('http://localhost:8080/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          max_tokens,
          n
        }),
      });

      const data = await response.json();
      // console.log(data.generations[0].text);
      setChatHistory([...chatHistory, { user: 'User', message: userInput }, { user: 'AI', message: data.generations[0].text }]);
      setUserInput('');
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  return (
    <Wrapper>
      <ChatBox>
        {chatHistory.map((chat, index) => (
          <MessageContainer key={index}>
            {chat.user === 'User' ? (
              <UserMessage>{chat.message}</UserMessage>
            ) : (
              <AIMessage>{chat.message}</AIMessage>
            )}
          </MessageContainer>
        ))}
      </ChatBox>
      <FormBox onSubmit={handleSubmit}>
        <MessageInput type="text" value={userInput} placeholder='무엇을 도와드릴까요?' onChange={(e) => setUserInput(e.target.value)} />
        <SendButton type="submit">전송</SendButton>
      </FormBox>
    </Wrapper>
  );
};

export default Chat;


// import { useState } from "react";
// import styled from "styled-components";
// import Answer from "../components/Answer";

// const Wrapper = styled.div`
// `;

// const Banner = styled.div`
//   height: 90vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 60px;
//   background-size: cover;
//   margin-top: 10vh;
// `;

// const ChatContent = styled.div`
//   margin-bottom: 40vh;

//   @media (max-width: 450px) {
//     margin-bottom: 10vh;
//     }
// `;

// const Line = styled.div`
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   color: black;
// `;

// const ChatBox = styled.span`
//   background: white;
//   border: 1px solid rgb(72, 132, 227);
//   border-radius: 8px;
//   padding: 52px 58px 54px 51px;
//   margin-bottom: 20px;
//   gap: 30px;
//   font-size: 22px;
//   text-align: justify;
//   align-items: flex-start;

//   @media (max-width: 450px) {
//     font-size: 16px;
//     }
// `;


// const ChatFormBox = styled.form`
//   display: flex;
//   opacity: 1;
//   height: 100px;
// `;

// const ChatInputBox = styled.input`
//   width: 90%;
//   height: 100px;
//   border: 1px solid rgb(72, 132, 227);
//   border-top-left-radius: 8px;
//   border-bottom-left-radius: 8px;
//   text-align: center;
//   :focus{
//     outline: none;
//   }
// `;

// const ChatSendButton = styled.button`
//   width: 10%;
//   height: 100px;
//   border: 0;
//   background-color: rgb(209, 215, 237);
// `;


// function Chat() {
//   const [question, setQuestion] = useState<any>(null);
//   const sendSumit = (e: any) => {
//     e.preventDefault();
//     setQuestion(e.target[0].value)
//     // console.log(question)
//   }

//   return (
//     <Wrapper>
//       <Banner>
//         <ChatContent>
//           <Line>
//             {
//               question === null
//                 ? null
//                 :
//                 <>
//                   <ChatBox>{question}</ChatBox>
//                   <Answer question={question} />
//                 </>
//             }
//           </Line>
//         </ChatContent>
//         <ChatFormBox onSubmit={sendSumit}>
//           <ChatInputBox name="myText" />
//           <ChatSendButton>
//             보내기
//           </ChatSendButton>
//         </ChatFormBox>
//       </Banner>
//     </Wrapper>
//   );
// }

// export default Chat;