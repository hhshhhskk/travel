// import { useState } from "react";
import styled from "styled-components";
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//     apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

const Wrapper = styled.div`
`;

const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-size: cover;
`;

const ChatContent = styled.div`
  height: 350px;
  overflow-y: scroll;
`;

const Line = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const ChatBoxAI = styled.span`
  background-color: #eee;
  padding: 5px;
  max-width: 200px;
`;

// const ChatBoxMine = styled(ChatBoxAI)`
//   margin-left: auto;
// `;

// const ChatFormBox = styled.form`
// `;

const ChatInputBox = styled.input`
`;

const ChatSendButton = styled.button`

`;


function Chat() {
    // const [aiChat, setAiChat] = useState();
    // const [myChat, setMyChat] = useState();
    // const [loading, setLoading] = useState(false);

    // const sendSumit = (e: any) => {
    //     e.preventDefault();
    //     setMyChat(e.target.myText.value);
    //     setLoading(false);
    //     openai.createCompletion({
    //         model: "text-davinci-003",
    //         prompt: e.target.myText.value,
    //         temperature: 0.7,
    //         max_tokens: 256,
    //         top_p: 1,
    //         frequency_penalty: 0,
    //         presence_penalty: 0,
    //     }).then((result: any) => {
    //         setLoading(true);
    //         setAiChat(result.data.choices[0].text)
    //     })
    // }

    return (
        <Wrapper>
            <Banner>
                <ChatContent>
                    <Line>
                        <ChatBoxAI>어디가 궁금하신가요??</ChatBoxAI>
                    </Line>
                    <Line>
                        {/* <ChatBoxMine>{myChat}</ChatBoxMine> */}
                    </Line>
                    <Line>
                        {/* {loading ?
                            <ChatBoxAI>{aiChat}</ChatBoxAI>
                            :
                            <ChatBoxAI>...</ChatBoxAI>
                        } */}
                    </Line>
                </ChatContent>
                {/* <ChatFormBox onSubmit={sendSumit}> */}
                <ChatInputBox name="myText" />
                <ChatSendButton>
                    보내기
                </ChatSendButton>
                {/* </ChatFormBox> */}
            </Banner>
        </Wrapper>
    );
}

export default Chat;