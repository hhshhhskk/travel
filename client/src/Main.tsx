import { useState } from "react";
import styled from "styled-components";
import AreaTour from "./components/AreaTour";

const Wrapper = styled.div`
  background: white;
  font-family: "kcc";
`;

const Space = styled.div`
  max-width: 3000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-size: cover;

  @media (max-width: 450px) {
    width: 100%;
    padding: 10px;
  }
`;

const Category = styled.div`
    display: flex;
    margin-top: 10vh;
    height: 100px;
    justify-content: space-between;

    @media (max-width: 450px) {
        height: 35px;
    }
`;

const CategoryItems = styled.div`
    box-shadow: rgba(0, 0, 0, 1) 0px 0px 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 50px;
    width: 7%;
    height: 90%;
    color: ${(props) => props.className === props.color ? "red" : "black"};
    font-size: 2.1vw;
    display : flex;
    justify-content : center;
    align-items : center;

    @media (max-width: 450px) {
        width: 9%;
        height: 100%;
    }

    cursor: pointer;
    :hover {
    color: blue;
  };
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

function Main() {
    const areaCodeName = ["서울", "인천", "대전", "대구", "광주", "부산", "울산", "세종", "경기도", "강원도"];
    const [clickedName, setClickedName] = useState("서울");
    const [areaCodeNum, setAreaCodeNum] = useState<number>(1);
    // const [totalData, setTotalData] = useState(0);
    const [pageNo, setPageNo] = useState<number>(1);

    const areaClick = (areaname: string, idx: number) => {
        setClickedName(areaname);
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
    // console.log(pageNo);
    return (
        <Wrapper>
            <Space>
                <Category>
                    {areaCodeName.map((areaname, idx) => (
                        <CategoryItems
                            key={idx}
                            color={clickedName}
                            className={areaname}
                            onClick={() => areaClick(areaname, idx)}
                        >
                            {areaname}
                        </CategoryItems>
                    ))}
                </Category>
                <AreaTour areaCodeNum={areaCodeNum} pageNo={pageNo} />
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
                <TourPageDiv>
                    Page {pageNo}
                </TourPageDiv>
            </Space>
        </Wrapper>
    );
}

export default Main;