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
`;

const Space = styled.div`
  width: 80%;
  height: 80%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  align-items: center;
  border-width: 1px;
  border: solid;
  border-color: black;
`;

const DetailName = styled.div`
    background-color: grey;
    margin-top: 10vh;
    width: 90%;
    font-size: 30px;

`;
const DetailDiv = styled.div`
    background-color: skyblue;
    width: 80%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    border-width: 1px;
    border: solid;
    border-radius: 50px;
    border-color: black;
`

const DetailOption = styled.div`
    border-width: 1px;
    border: solid;
    border-radius: 50px;
    border-color: black;
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 2.1vw;
`
const Circle = styled(motion.div)`
    background-color: #00a5ff;
    height: 20px;
    width: 20px;
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
    const [clicked, setClicked] = useState(true);
    const [data, setData] = useState("공통정보");
    const clickedOtion = (option: any) => {
        setClicked((prev) => !prev)
        setData(option);
        console.log(clicked);
    }
    return (
        <Wrapper>
            <Space>
                <DetailName>{detailData?.[0].title}</DetailName>
                <DetailDiv>
                    {detailOtion.map((option) => (
                        <DetailOption
                            key={option}
                            onClick={() => clickedOtion(option)}
                        >
                            {option}
                            {data === option
                                ? <Circle layout />
                                : null
                            }
                        </DetailOption>
                    ))}
                </DetailDiv>
            </Space>
        </Wrapper>
    );
}

export default AreaTourDetail;