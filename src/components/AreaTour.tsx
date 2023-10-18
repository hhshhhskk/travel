import styled from "styled-components";
import { useQuery } from "react-query";
import { areaTrip } from "../apis/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const TourItems = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-evenly;
    margin-top: 5vh;
    gap: 10px;
    font-family: "kcc";

    @media (max-width: 450px) {
        margin-top: 2vh;
    }
`;

const TourItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-color: rgba(0,0,0,0.56);
    cursor: pointer;
`;

const TourImg = styled.img`
    width: 35vh;
    height: 200px;
`;

const TourName = styled.div`
    width: 35vh;
    height: 30px;
    font-size: 20px;
    padding-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: rgba(0,0,0,0.56);
    background-color: white;
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

interface Inum {
    areaCodeNum: number,
    pageNo: number
}

interface Icont {
    contentId: string;
}

function AreaTour(props: Inum) {
    const { isLoading, data: areaData, refetch } = useQuery<Idata[]>(
        ["areaData"],
        async () => {
            const areadata = await areaTrip(props.areaCodeNum, props.pageNo)
            // console.log("쿼리요청됨")
            return areadata.response.body.items.item;
        },
    );
    useEffect(() => {
        refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.areaCodeNum, props.pageNo]);
    const navigate = useNavigate();

    const onClicked = async (data: Icont) => {
        navigate(`/Detail?id=${data}`);
    };
    return (
        <TourItems>
            {isLoading
                ? <div>loading...</div>
                : areaData?.map((data: any, idx: any) => (
                    <TourItem key={data.contentid}>
                        <TourImg
                            onClick={() => onClicked(data.contentid)}
                            src={areaData?.[idx].firstimage
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