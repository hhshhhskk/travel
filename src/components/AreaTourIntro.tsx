import styled from "styled-components";
import { useQuery } from "react-query";
import { areaTripIntro } from "../apis/api";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-family: "kcc";
`;

const IntroTypeName = styled.div`
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const IntroTable = styled.table`
    width: 100%;
    color: black;
    font-size: 2vh;
    th, td {
        border: solid 1.5px;
        text-align: center;
        line-height : 6vh;
    }
    th {
        width: 20%;
        background-color: skyblue;
        color: white;
        border-color: black;
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

interface Inum {
    contenttypeid?: number,
    contentId: number
}

function AreaTourIntro(props: Inum) {
    const { data: areaIntroData } = useQuery<any>(
        ["areaInfoData"],
        async () => {
            const areadata = await areaTripIntro(props.contentId, props.contenttypeid)
            // console.log("쿼리요청됨")
            return areadata.response.body.items.item[0]
        },
    );
    console.log(areaIntroData, "쿼리요청")
    return (
        <Wrapper>
            {areaIntroData?.contenttypeid === "12"
                ?
                <>
                    <IntroTypeName>관광지</IntroTypeName>
                    <IntroTable>
                        <tbody>
                            <tr>
                                <th>개장일</th>
                                <td>{areaIntroData?.infocenter}</td>
                            </tr>
                            <tr>
                                <th>쉬는날</th>
                                <td>{areaIntroData?.restdate}</td>
                            </tr>
                            <tr>
                                <th>주차시설</th>
                                <td>{areaIntroData?.parking}</td>
                            </tr>
                            <tr>
                                <th>유모자 대여 여부</th>
                                <td>{areaIntroData?.chkbabycarriage}</td>
                            </tr>
                            <tr>
                                <th>애완동물 동반 가능여부</th>
                                <td>{areaIntroData?.chkpet}</td>
                            </tr>
                            <tr>
                                <th>신용카드 가능여부</th>
                                <td>{areaIntroData?.chkbabycarriage}</td>
                            </tr>
                        </tbody>
                    </IntroTable>
                </>
                : areaIntroData?.contenttypeid === "14"
                    ? <IntroTypeName>문화시설</IntroTypeName>

                    : areaIntroData?.contenttypeid === "15"
                        ? <IntroTypeName>행사/공연/축제</IntroTypeName>

                        : areaIntroData?.contenttypeid === "25"
                            ? <IntroTypeName>여행코스</IntroTypeName>

                            : areaIntroData?.contenttypeid === "28"
                                ? <IntroTypeName>레포츠</IntroTypeName>

                                : areaIntroData?.contenttypeid === "32"
                                    ? <IntroTypeName>숙박</IntroTypeName>

                                    : areaIntroData?.contenttypeid === "38"
                                        ?
                                        <>
                                            <IntroTypeName>쇼핑</IntroTypeName>
                                            <IntroTable>
                                                <tbody>
                                                    <tr>
                                                        <th>문의 및 안내</th>
                                                        <td>{areaIntroData?.infocentershopping}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>판매품목</th>
                                                        <td>{areaIntroData?.saleitem}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>장서는 날</th>
                                                        <td>{areaIntroData?.fairday}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>영업시간</th>
                                                        <td>{areaIntroData?.opentime}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>매장안내</th>
                                                        <td>{areaIntroData?.shopguide}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>주차시설</th>
                                                        <td>{areaIntroData?.parkingshopping}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>신용카드 가능여부</th>
                                                        <td>{areaIntroData?.chkcreditcardshopping}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>화장실</th>
                                                        <td>{areaIntroData?.restroom}</td>
                                                    </tr>
                                                </tbody>

                                            </IntroTable>
                                        </>
                                        : areaIntroData?.contenttypeid === "39"
                                            ? <IntroTypeName>음식점</IntroTypeName>
                                            : null
            }
        </Wrapper>
    );
}

export default AreaTourIntro;