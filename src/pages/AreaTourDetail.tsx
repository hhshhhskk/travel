import styled from "styled-components";
import { useQuery } from "react-query";
import { areaTripDetail } from "../apis/api";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import AreaTourIntro from "../components/AreaTourIntro";

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

const DetailName = styled.div`
    margin-top: 5vh;
    margin-bottom: 20px;
    width: 90%;
    font-size: 30px;
    @media (max-width: 450px) {
        font-size: 10px;
        text-align: center;
    }
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

    return (
        <Wrapper>
            <Space>
                <DetailName>{detailData?.[0].title}</DetailName>
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
                        : null

                }
            </Space>
        </Wrapper>
    );
}

export default AreaTourDetail;