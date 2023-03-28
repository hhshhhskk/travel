import styled from "styled-components";
import { useQuery } from "react-query";
import { areaTripDetail } from "../apis/api";
import { useLocation } from "react-router-dom";


const Wrapper = styled.div`
  background: white;
`;

const Space = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-size: cover;
`;

const Divv = styled.div`
    background-color: blue;
    width: 400px;
    height: 400px;
`
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
    const { isLoading, data: DetailData } = useQuery<Idata[]>(
        ["Detail"], () => areaTripDetail(contentId)
    );
    console.log(isLoading, DetailData, "디테일데이터");
    return (
        <Wrapper>
            <Space>
                <Divv></Divv>
            </Space>
        </Wrapper>
    );
}

export default AreaTourDetail;