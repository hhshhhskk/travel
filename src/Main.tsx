import { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_PATH, API_KEY, TYPE, DATA_NUMBER } from "./apis/const";


const Wrapper = styled.div`
  background: skyblue;
`;

const Space = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-size: cover;
`;

const Category = styled.div`
    display: flex;
    margin-top: 10vh;
    justify-content: space-between;
`;

const CategoryItems = styled.div`
    border-width: 1px;
    border: solid;
    border-color: black;
    width: 100px;
    height: 60px;
    color: white;
    font-size: 2.1vw;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor: pointer;
    &:hover {
    color: blue;
  }
`;

const TourItems = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-evenly;
    margin-top: 8vh;
    gap: 10px;
`;

const TourItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const TourImg = styled.img`
    width: 35vh;
    height: 200px;
`;

const TourName = styled.div`
    width: 35vh;
    height: 30px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: black;
    background-color: gray;
`;

const TourPageDiv = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

const TourPageNumBtn = styled.div`
    border-width: 1px;
    border: solid;
    border-color: black;
    width: 30px;
    height: 30px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
    color: blue;
  }
`;

const TourPageUpDownBtn = styled.div`
    border-width: 1px;
    border: solid;
    border-color: black;
    width: 30px;
    height: 30px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
    color: blue;
  }
`;
interface Idata {
    // [key: number]: any,
    addr1: string,
    addr2: string,
    areacode: number,
    booktour: string,
    cat1: string,
    cat2: string,
    cat3: string,
    contentid: number,
    contenttypeid: number,
    createdtime: number,
    firstimage: string,
    firstimage2: string,
    mapx: number,
    mapy: number,
    mlevel: number,
    modifiedtime: number,
    readcount: number,
    sigungucode: number,
    tel: string,
    title: string,
    zipcode: number
}

function Main() {
    const areaCodeName = ["서울", "인천", "대전", "대구", "광주", "부산", "울산", "세종", "경기도", "강원도"];
    const [areaCodeNum, setAreaCodeNum] = useState<number>(1);
    const [areaData, setAreaData] = useState<Idata[]>();
    const [totalData, setTotalData] = useState(0);
    const [pageNo, setPageNo] = useState<number>(1);
    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${BASE_PATH}/areaBasedList?numOfRows=${DATA_NUMBER}&pageNo=${pageNo}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&${TYPE}&listYN=Y&arrange=A&contentTypeId=12&areaCode=${areaCodeNum}`
            );

            const json = await response.json();
            setTotalData(json.response.body.totalCount);
            setAreaData(json.response.body.items.item)
        })();
    }, [areaCodeNum, pageNo]);
    const areaClick = (idx: number) => {

        setAreaCodeNum(idx + 1);
        setPageNo(1);
    };
    const upClick = () => {
        setPageNo(pageNo + 1)
    };
    const downClick = () => {
        setPageNo(pageNo - 1)
    }
    const pageClick = (idx: number) => {
        setPageNo(idx + pageNo);
    }
    console.log(pageNo);
    return (
        <Wrapper>
            <Space>
                <Category>
                    {areaCodeName.map((areaname, idx) => (
                        <CategoryItems
                            key={idx}
                            onClick={() => areaClick(idx)}
                        >
                            {areaname}
                        </CategoryItems>
                    ))}
                </Category>
                <TourItems>
                    {areaData?.map((data, idx) => (
                        <TourItem key={data.contentid}>
                            <TourImg src={areaData?.[idx].firstimage
                                ? areaData?.[idx].firstimage
                                : "/no_img.png"
                            } />
                            <TourName>
                                {areaData?.[idx].title}
                            </TourName>
                        </TourItem>
                    ))}
                </TourItems>
                <TourPageDiv>
                    <TourPageUpDownBtn
                        onClick={downClick}
                    >
                        {"<"}
                    </TourPageUpDownBtn>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pagenum, idx) => (
                        <TourPageNumBtn
                            key={idx}
                            onClick={() => pageClick(idx)}
                        >
                            {idx + pageNo}
                        </TourPageNumBtn>
                    ))}
                    <TourPageUpDownBtn
                        onClick={upClick}
                    >
                        {">"}
                    </TourPageUpDownBtn>
                </TourPageDiv>
            </Space>
        </Wrapper>
    );
}

export default Main;