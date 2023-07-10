import styled from "styled-components";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { MyPageApi } from "../apis/api";
import { useLocation } from "react-router-dom";

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

const Title = styled.div`
    font-size: 33px;
`

const ContentAddr = styled.table`
    border: solid 1px;
    width: 90vh;
    height: 10vh;
    margin-top: 5vh;
    color: black;
    font-size: 2.5vh;
    th, td {
        border: solid 1px;
        text-align: center;
        line-height : 10vh;
    }
    th {
        width: 30%
    }
    @media (max-width: 450px) {
        width: 300px;
        height: 20px;
        font-size: 10px;
        th, td {
        border: solid 1px;
        text-align: center;
        line-height : normal;
    }
    }
`;


function Mypage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const contentId = String(searchParams.get("id"));
    const { isLoading, data: MyPageData } = useQuery(["MyPage"], async () => {
        const data = await MyPageApi(contentId);
        return data
    }
    );
    console.log(isLoading, MyPageData?.status)

    const id = sessionStorage.getItem('id');
    const nickname = sessionStorage.getItem('nickname');

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
                {isLoading
                    ?
                    <>
                        <Title>마이페이지</Title>
                        <h1>Loading...</h1>
                    </>
                    :
                    <>
                        <Title>마이페이지</Title>
                        {MyPageData?.status === '실패'
                            ?
                            <ContentAddr>
                                <thead>
                                    <tr>
                                        <th>아이디</th>
                                        <td>{id}</td>
                                    </tr>
                                    <tr>
                                        <th>닉네임</th>
                                        <td>{nickname}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>찜 목록</th>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>{MyPageData?.message}</td>
                                    </tr>
                                </tbody>
                            </ContentAddr>
                            :
                            <table>
                                <thead>
                                    <tr>
                                        <th>아이디</th>
                                        <th>{MyPageData?.[0]?.id}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>주소</td>
                                        <td>
                                            {MyPageData?.[0]?.id}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        }

                    </>
                }
            </Space>
        </Wrapper>
    );
}

export default Mypage;