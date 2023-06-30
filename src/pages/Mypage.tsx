// import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "kcc";

`;

const Space = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 30px;
  width: 80%;
  min-height: 700px;
  margin-top: 14vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  align-items: center;
  @media (max-width: 450px) {
    min-height: 500px;
}
`;


function Mypage() {
    // const { isLoading, data: userData } = useQuery(
    //     ["aiChat"],
    //     async () => {
    //         const answer = await aiChat(props.question);
    //         console.log("쿼리요청됨", answer.message.result.translatedText)
    //         return answer.message.result.translatedText;
    //     },
    // );
    // console.log(isLoading, userData)
    useEffect(() => {
        // 로그인을 하지않고 URL로 마이페이지 접근 시 처리
        const isLoggedIn = sessionStorage.getItem('loggedIn');
        if (isLoggedIn !== "true") {
            window.location.href = '/';
        }
    })
    return (
        <Wrapper>
            <Space>
                <h1>마이페이지</h1>
            </Space>
        </Wrapper>
    );
}

export default Mypage;