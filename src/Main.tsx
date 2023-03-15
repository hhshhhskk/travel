import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { areaTrip } from "./api/api";


const Wrapper = styled.div`
  background: skyblue;
`;

const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-size: cover;
`;

const Category = styled.div`
    display: flex;
    margin-top: 10vh;
    gap: 10px;
`;

const CategoryItems = styled.div`
    border-width: 1px;
    border: solid;
    border-color: black;
`;

const TourItems = styled.div`
    display: flex;
    margin-top: 10vh;
    gap: 10px;
`;

const TourItem = styled.div``;

const TourImg = styled.img`
    width: 100px;
    height: 100px;
`;

interface Idata {
    [key: number]: any,
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
    const [areaCodeNum, setAreaCodeNum] = useState(1);

    const { isLoading, data: areaTripData } = useQuery(["areaTrip"], () => {
        areaTrip(areaCodeNum)
    })
    console.log(isLoading, areaTripData);
    const areaClick = (idx: number) => {

        setAreaCodeNum(idx + 1);
    };
    return (
        <Wrapper>
            <Banner>
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
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i: number) => (
                        <TourItem key={i}>
                            <TourImg />
                        </TourItem>
                    ))}
                </TourItems>
            </Banner>
        </Wrapper>
    );
}

export default Main;