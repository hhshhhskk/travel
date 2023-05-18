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
                    ?
                    <>
                        <IntroTypeName>문화시설</IntroTypeName>
                        <IntroTable>
                            <tbody>
                                <tr>
                                    <th>문의 및 안내</th>
                                    <td>{areaIntroData?.infocenterculture}</td>
                                </tr>
                                <tr>
                                    <th>규모</th>
                                    <td>{areaIntroData?.scale}</td>
                                </tr>
                                <tr>
                                    <th>쉬는날</th>
                                    <td>{areaIntroData?.restdateculture}</td>
                                </tr>
                                <tr>
                                    <th>이용시간</th>
                                    <td>{areaIntroData?.usetimeculture
                                    }</td>
                                </tr>
                                <tr>
                                    <th>이용요금</th>
                                    <td>{areaIntroData?.usefee}</td>
                                </tr>
                                <tr>
                                    <th>주차시설</th>
                                    <td>{areaIntroData?.parkingculture}</td>
                                </tr>
                                <tr>
                                    <th>유모자 대여 여부</th>
                                    <td>{areaIntroData?.chkbabycarriageculture}</td>
                                </tr>
                                <tr>
                                    <th>애완동물 동반 가능여부</th>
                                    <td>{areaIntroData?.chkpetculture}</td>
                                </tr>
                                <tr>
                                    <th>신용카드 가능여부</th>
                                    <td>{areaIntroData?.chkcreditcardculture}</td>
                                </tr>
                            </tbody>
                        </IntroTable>
                    </>
                    : areaIntroData?.contenttypeid === "15"
                        ?
                        <>
                            <IntroTypeName>행사/공연/축제</IntroTypeName>
                            <IntroTable>
                                <tbody>
                                    <tr>
                                        <th>주최자 정보</th>
                                        <td>{areaIntroData?.sponsor1}</td>
                                    </tr>
                                    <tr>
                                        <th>주최자 연락처</th>
                                        <td>{areaIntroData?.sponsor1tel}</td>
                                    </tr>
                                    <tr>
                                        <th>주관사 정보</th>
                                        <td>{areaIntroData?.sponsor2}</td>
                                    </tr>
                                    <tr>
                                        <th>행사시작일</th>
                                        <td>{areaIntroData?.eventstartdate
                                        }</td>
                                    </tr>
                                    <tr>
                                        <th>행사종료일</th>
                                        <td>{areaIntroData?.eventenddate}</td>
                                    </tr>
                                    <tr>
                                        <th>공연시간</th>
                                        <td>{areaIntroData?.playtime}</td>
                                    </tr>
                                    <tr>
                                        <th>행사장소</th>
                                        <td>{areaIntroData?.eventplace}</td>
                                    </tr>
                                    <tr>
                                        <th>이용요금</th>
                                        <td>{areaIntroData?.usetimefestival}</td>
                                    </tr>
                                    <tr>
                                        <th>진행형태</th>
                                        <td>{areaIntroData?.program}</td>
                                    </tr>
                                    <tr>
                                        <th>축제형태</th>
                                        <td>{areaIntroData?.festivalgrade}</td>
                                    </tr>
                                </tbody>
                            </IntroTable>
                        </>
                        : areaIntroData?.contenttypeid === "25"
                            ?
                            <>
                                <IntroTypeName>여행코스</IntroTypeName>
                                <IntroTable>
                                    <tbody>
                                        <tr>
                                            <th>총 거리</th>
                                            <td>{areaIntroData?.distance}</td>
                                        </tr>
                                        <tr>
                                            <th>소요시간</th>
                                            <td>{areaIntroData?.taketime}</td>
                                        </tr>
                                    </tbody>
                                </IntroTable>
                            </>
                            : areaIntroData?.contenttypeid === "28"
                                ?
                                <>
                                    <IntroTypeName>레포츠</IntroTypeName>
                                    <IntroTable>
                                        <tbody>
                                            <tr>
                                                <th>문의 및 안내</th>
                                                <td>{areaIntroData?.infocenterleports}</td>
                                            </tr>
                                            <tr>
                                                <th>쉬는날</th>
                                                <td>{areaIntroData?.restdateleports}</td>
                                            </tr>
                                            <tr>
                                                <th>이용시간</th>
                                                <td>{areaIntroData?.usetimeleports}</td>
                                            </tr>
                                            <tr>
                                                <th>예약안내</th>
                                                <td>{areaIntroData?.reservation}</td>
                                            </tr>
                                            <tr>
                                                <th>주차시설</th>
                                                <td>{areaIntroData?.parkingleports}</td>
                                            </tr>
                                            <tr>
                                                <th>유모자 대여 여부</th>
                                                <td>{areaIntroData?.chkbabycarriageleports}</td>
                                            </tr>
                                            <tr>
                                                <th>애완동물 동반 가능여부</th>
                                                <td>{areaIntroData?.chkpetleports}</td>
                                            </tr>
                                            <tr>
                                                <th>신용카드 가능여부</th>
                                                <td>{areaIntroData?.chkcreditcardleports}</td>
                                            </tr>
                                        </tbody>
                                    </IntroTable>
                                </>
                                : areaIntroData?.contenttypeid === "32"
                                    ?
                                    <>
                                        <IntroTypeName>숙박</IntroTypeName>
                                        <IntroTable>
                                            <tbody>
                                                <tr>
                                                    <th>문의 및 안내</th>
                                                    <td>{areaIntroData?.infocenterlodging}</td>
                                                </tr>
                                                <tr>
                                                    <th>규모</th>
                                                    <td>{areaIntroData?.scalelodging}</td>
                                                </tr>
                                                <tr>
                                                    <th>객실 수</th>
                                                    <td>{areaIntroData?.roomcount}</td>
                                                </tr>
                                                <tr>
                                                    <th>객실유형</th>
                                                    <td>{areaIntroData?.roomtype
                                                    }</td>
                                                </tr>
                                                <tr>
                                                    <th>주차 가능</th>
                                                    <td>{areaIntroData?.parkinglodging}</td>
                                                </tr>
                                                <tr>
                                                    <th>조리 가능</th>
                                                    <td>{areaIntroData?.chkcooking}</td>
                                                </tr>
                                                <tr>
                                                    <th>체크인</th>
                                                    <td>{areaIntroData?.checkintime}</td>
                                                </tr>
                                                <tr>
                                                    <th>체크아웃</th>
                                                    <td>{areaIntroData?.checkouttime}</td>
                                                </tr>
                                                <tr>
                                                    <th>예약안내</th>
                                                    <td>{areaIntroData?.reservationlodging}</td>
                                                </tr>
                                                <tr>
                                                    <th>예약안내 홈페이지</th>
                                                    <td>{areaIntroData?.reservationurl}</td>
                                                </tr>
                                                <tr>
                                                    <th>식음료장</th>
                                                    <td>{areaIntroData?.foodplace}</td>
                                                </tr>
                                            </tbody>
                                        </IntroTable>
                                    </>
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
                                            ?
                                            <>
                                                <IntroTypeName>음식점</IntroTypeName>
                                                <IntroTable>
                                                    <tbody>
                                                        <tr>
                                                            <th>문의 및 안내</th>
                                                            <td>{areaIntroData?.infocenterfood}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>주차시설</th>
                                                            <td>{areaIntroData?.parkingfood}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>영업 시간</th>
                                                            <td>{areaIntroData?.opentimefood}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>쉬는 날</th>
                                                            <td>{areaIntroData?.restdatefood}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>대표 메뉴</th>
                                                            <td>{areaIntroData?.firstmenu}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>취급 메뉴</th>
                                                            <td>{areaIntroData?.treatmenu}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>할인 가능여부</th>
                                                            <td>{areaIntroData?.reservationfood}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>신용카드 가능여부</th>
                                                            <td>{areaIntroData?.chkcreditcardfood}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>포장 가능여부</th>
                                                            <td>{areaIntroData?.packing}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>예약 안내</th>
                                                            <td>{areaIntroData?.reservationfood}</td>
                                                        </tr>
                                                    </tbody>
                                                </IntroTable>
                                            </>
                                            : null
            }
        </Wrapper>
    );
}

export default AreaTourIntro;