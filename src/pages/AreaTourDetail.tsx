import styled from "styled-components";
import { useQuery } from "react-query";
import { WishListApi, WishListInsertApi, areaTripDetail } from "../apis/api";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import AreaTourIntro from "../components/AreaTourIntro";
import MoreImg from "../components/MoreImg";

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
  min-height: 900px;
  margin-top: 14vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  align-items: center;
  @media (max-width: 450px) {
    min-height: 500px;
}
`;

const DetailTitle = styled.div`
    display: flex;
    margin-top: 5vh;
    width: 90%;
`

const DetailName = styled.div`
    margin-bottom: 20px;
    font-size: 30px;
    @media (max-width: 450px) {
        font-size: 10px;
        text-align: center;
    }
`;

const DetailStar = styled.svg`
    font-size: 35px;
    margin-left: 2%;

    cursor: pointer;
`;

const DetailDiv = styled.div`
    width: 80%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 50px;
`

const DetailOption = styled.div`
    width: 100%;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color:rgb(89, 89, 89);
    font-size: 2.1vw;
    cursor: pointer;
`
const Circle = styled(motion.div)` 
    position: absolute;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
    width: 20%;
    height: 5%;
    @media (max-width: 450px) {
        width: 15%;
    }
`;

const Contents = styled.div`
    margin-top: 5vh;
    width: 90%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

const ContentImg = styled.img`
    width: 40vh;
    height: 30vh;

    @media (max-width: 450px) {
        width: 30vh;
        height: 20vh;
    }
`;

const ContentAddr = styled.table`
    border: solid 1px;
    width: 80vh;
    height: 10vh;
    color: black;
    font-size: 2.5vh;
    th, td {
        border: solid 1px;
        text-align: center;
        line-height : 10vh;
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

const ContenstInfo = styled.div`
    border: solid 1px rgb(101, 101, 101);
    border-radius: 20px;
    margin-top: 10px;
    width: 100%;
    min-height: 300px;
    padding: 20px;
    color: rgb(50, 50, 50);
    font-size: 1.5em;
    
    @media (max-width: 450px) {
        font-size: 10px;
        min-height: 200px;
    }
`;
interface Idata {
    // [key: number]: any,
    addr1: string,
    contentid: number,
    contenttypeid: number,
    title: string,
    createdtime: number,
    modifiedtime: number,
    tel: number,
    telname: any,
    homepage: string,
    booktour: string,
    firstimage: string,
    zipcode: number,
    overview: string,
}

function AreaTourDetail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = Number(sessionStorage.getItem('id'));
    const contentId = Number(searchParams.get("id"));
    const { data: detailData } = useQuery<Idata[]>(
        ["Detail"], async () => {
            const data = await areaTripDetail(contentId);
            return data.response.body.items.item;
        }
    );
    const detailOtion = ["공통정보", "소개정보", "이미지 더보기"]
    // console.log(isLoading, detailData?.[0]);
    const [data, setData] = useState("공통정보");


    // 해당 아이디의 찜목록에 있는지 확인
    const { data: WishListData, refetch } = useQuery(["MyPage"], async () => {
        const data = await WishListApi(id, contentId);
        console.log(data);
        return data.status;
    }, {
        enabled: id !== 0,
    });

    const onClickedStar = (e: any) => {
        e.preventDefault();
        const isLoggedIn = sessionStorage.getItem('loggedIn');
        if (isLoggedIn !== "true") {
            alert("로그인 후 이용해 주세요.");
        } else {
            if (WishListData === '실패') {
                const title = String(detailData?.[0].title);
                // console.log(id, contentId, title);
                WishListInsertApi(id, contentId, title);
                refetch()
            } else {

            }
        }
    };

    return (
        <Wrapper>
            <Space>
                <DetailTitle>
                    <DetailName>{detailData?.[0].title}</DetailName>
                    <>
                        {WishListData === '실패' || id === 0
                            ?
                            <DetailStar xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" onClick={onClickedStar}><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                            </DetailStar>
                            :
                            <DetailStar xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" onClick={onClickedStar} ><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></DetailStar>
                        }
                    </>
                </DetailTitle>
                <DetailDiv>
                    {detailOtion.map((option) => (
                        <DetailOption
                            key={option}
                            onClick={() => setData(option)}
                        >
                            {option}
                            {data === option
                                ? <Circle layoutId="underline" />
                                : null
                            }
                        </DetailOption>
                    ))}
                </DetailDiv>
                {data === "공통정보"
                    ?
                    <Contents>
                        <Content>
                            <ContentImg
                                src={detailData?.[0].firstimage
                                    ? detailData?.[0].firstimage
                                    : "/no_img.png"
                                }
                            />
                            <ContentAddr>
                                <thead>
                                    <tr>
                                        <th>우편번호</th>
                                        <th>{detailData?.[0].zipcode}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>주소</td>
                                        <td>
                                            {detailData?.[0].addr1}
                                        </td>
                                    </tr>
                                </tbody>
                            </ContentAddr>
                        </Content>
                        <Content>
                            <ContenstInfo>
                                {detailData?.[0].overview}
                            </ContenstInfo>
                        </Content>
                    </Contents>
                    : data === "소개정보"
                        ? <AreaTourIntro
                            contenttypeid={detailData?.[0].contenttypeid}
                            contentId={contentId} />
                        : data === "이미지 더보기"
                            ? <MoreImg />
                            : null
                }
            </Space>
        </Wrapper >
    );
}

export default AreaTourDetail;