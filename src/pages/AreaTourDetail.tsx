import styled from "styled-components";
import { useQuery } from "react-query";
import { areaTripDetail } from "../apis/api";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
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
  height: 80%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  align-items: center;
`;

const DetailName = styled.div`
    margin-top: 5vh;
    margin-bottom: 20px;
    width: 90%;
    font-size: 30px;
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
`;

const Contents = styled.div`

`;

const Content = styled.div`

`;

const ContentImg = styled.img`
    width: 35vh;
    height: 200px;
`;

interface Idata {
    // [key: number]: any,
    contentid: number,
    contenttypeid: number,
    title: string,
    createdtime: number,
    modifiedtime: number,
    tel: number,
    telname: any,
    homepage: string,
    "booktour": "1"
}

function AreaTourDetail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const contentId = Number(searchParams.get("id"));
    const { isLoading, data: detailData } = useQuery<Idata[]>(
        ["Detail"], async () => {
            const data = await areaTripDetail(contentId);
            return data.response.body.items.item;
        }
    );
    const detailOtion = ["공통정보", "소개정보", "이미지 더보기"]
    console.log(isLoading, detailData, "디테일데이터");
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
                <Contents>
                    <Content>
                        <ContentImg />
                    </Content>
                </Contents>
            </Space>
        </Wrapper>
    );
}

export default AreaTourDetail;