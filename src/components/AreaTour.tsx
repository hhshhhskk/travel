import styled from "styled-components";
import { useQuery } from "react-query";
import { areaTrip } from "../apis/api";
import { useEffect } from "react";


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

interface num {
    areaCodeNum: number,
    pageNo: number
}

function AreaTour(props: num) {
    const { isLoading, data: areaData, refetch } = useQuery<Idata[]>(
        ["info"],
        async () => {
            const areadata = await areaTrip(props.areaCodeNum, props.pageNo)
            console.log("쿼리요청됨")
            return areadata.response.body.items.item;
        },
        {
        }
    );

    useEffect(() => {
        refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.areaCodeNum, props.pageNo]);
    return (
        <TourItems>
            {isLoading
                ? <div>loading...</div>
                : areaData?.map((data: any, idx: any) => (
                    <TourItem key={data.contentid}>
                        <TourImg src={areaData?.[idx].firstimage
                            ? areaData?.[idx].firstimage
                            : "/no_img.png"
                        } />
                        <TourName>
                            {areaData?.[idx].title}
                        </TourName>
                    </TourItem>
                ))
            }
        </TourItems>
    );
}

export default AreaTour;