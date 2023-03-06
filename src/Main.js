import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_PATH = "	http://apis.data.go.kr/B551011/KorService";

const API_KEY = "9%2Bmjut77JeCgLpJnD6eoWV7TctBLzXUqwzvjS5DZS4cXBdUNbCP7uYZFMMFwhFHAmVkgOYxFi05sxTE6zqSqKA%3D%3D";

const TYPE = "_type=json";



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
function Main() {
    const areaCodeName = ["서울", "인천", "대전", "대구", "광주", "부산", "울산", "세종", "경기도", "강원도"];
    const [areaCodeNum, setAreaCodeNum] = useState(1);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
          const response = await fetch(
            `${BASE_PATH}/areaBasedList?numOfRows=10&pageNo=3&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&${TYPE}&listYN=Y&arrange=A&contentTypeId=12&areaCode=${areaCodeNum}`
          );
    
          const json = await response.json();
            console.log(json.response.body.items.item);
            
            setData(json.response.body.items.item);
        })();
    }, []);
    
    const areaClick = (idx, e) => {
       
        setAreaCodeNum(idx+1);
    };
  return (
    <Wrapper>
      <Banner>
        <Category>
            {areaCodeName.map((areaname, idx) => (
                <CategoryItems
                    key={idx}
                    onClick={(e) => areaClick(idx, e)}
                >
                    {areaname}
                </CategoryItems>
            ))}
        </Category>
        <TourItems>
                  {[0,1,2,3,4,5,6,7,8,9].map((i) => (
                <TourItem>
                    <TourImg src={data?.[i].firstimage}/>
                </TourItem>
            ))}          
        </TourItems>      
      </Banner>
    </Wrapper>
  );
}

export default Main;
