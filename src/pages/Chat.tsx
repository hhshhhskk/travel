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
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Chat: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ user: string; message: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();
      setChatHistory([...chatHistory, { user: 'User', message: userInput }, { user: 'AI', message: data.ai }]);
      setUserInput('');
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  return (
    <Wrapper>
      <ChatBox>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <strong>{chat.user}: </strong>
            {chat.message}
          </div>
        ))}
      </ChatBox>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button type="submit">전송</button>
      </form>
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