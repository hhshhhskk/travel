import styled from "styled-components";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { MyPageApi, SignOutApi } from "../apis/api";
import { useLocation, useNavigate } from "react-router-dom";

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

const WishListDiv = styled.div`
    gap: 5px;
    cursor: pointer;
    &:hover {
    color: blue;
  }
`

const LeaveBox = styled.div`
    display: flex;
    width: 60%;
    height: 80px;
    margin-top: 5vh;
    border-radius: 25px;
    background-color: #eb5454;
    color: #f8f8f8e9;
    font-size: 44px;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

interface Idata {
    status?: string,
    id?: string,
    wishlist_id?: string,
    title?: string,
}


function Mypage() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const contentId = Number(searchParams.get("id"));
    const { isLoading, data: MyPageData } = useQuery<Idata[]>(["MyPage"], async () => {
        const data = await MyPageApi(contentId);
        return data
    }
    );
    // console.log(isLoading, MyPageData)

    const id = String(sessionStorage.getItem('id'))
    const nickname = sessionStorage.getItem('nickname');

    useEffect(() => {
        // 로그인을 하지않고 URL로 마이페이지 접근 시 처리
        const isLoggedIn = sessionStorage.getItem('loggedIn');
        if (isLoggedIn !== "true") {
            window.location.href = '/';
        }
    })

    const onClicked = async (data: string | undefined) => {
        navigate(`/Detail?id=${data}`);
    };

    const signOutOnClicked = async () => {
        if (window.confirm("정말로 회원을 탈퇴 하시겠습니까?")) {
            SignOutApi(id);
        }
    };

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
                        {MyPageData?.[0].status === '실패'
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
                                        <td colSpan={2}>
                                            찜목록이 없습니다.
                                        </td>
                                    </tr>
                                </tbody>
                            </ContentAddr>
                            :
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
                                        <td colSpan={2}>
                                            {MyPageData?.map((data: Idata, i: number) => (
                                                <WishListDiv
                                                    key={i}
                                                    onClick={() => onClicked(data.wishlist_id)}
                                                >
                                                    {data?.title}
                                                </WishListDiv>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </ContentAddr>
                        }
                        <LeaveBox onClick={signOutOnClicked}>
                            <div>회 원 탈 퇴</div>
                        </LeaveBox>
                    </>
                }
            </Space>
        </Wrapper>
    );
}

export default Mypage;