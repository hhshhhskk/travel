import { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { MoreImages } from "../apis/api";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    font-family: "kcc";
    justify-content: center;
    align-items: center;
`;

const ImgBoxs = styled.div`
    display: flex;
    margin-top: 5vh;
    width: 90%;
    height: 45vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 450px) {
        height: 330px;
}
`;

const Img = styled(motion.img)`
    position: absolute;
    width: 500px;
    height: 500px;
    box-shadow: rgb(0, 0, 0) 0px 0px 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 200px;
        height: 200px;
}
`;

const NextBtn = styled.div`
    box-shadow: rgb(0, 0, 0) 0px 0px 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    width: 100px;
    height: 50px;
    margin-top: 40px;
    text-align: center;
    font-size: 35px;

    @media (max-width: 450px) {
        width: 80px;
        height: 40px;
        margin-top: 0px;
        font-size: 30px;
}
`;
interface Idata {
    // [key: number]: any,
    contentid: number,
    originimgurl: string,
    imgname: string,
    smallimageurl: string,
    cpyrhtDivCd: string,
    serialnum: string
}

const imgAnimation = {
    invisible: {
        x: 500,
        opacity: 0,
        scale: 0,

    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        x: -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1
        },
    }
}
function MoreImg() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const contentId = Number(searchParams.get("id"));
    const { data: imgData } = useQuery<Idata[]>(
        ["img"], async () => {
            const data = await MoreImages(contentId);
            return data.response.body.items.item;
        }
    );
    const [show, setShow] = useState(0);
    const nextClick = () => setShow((prev) => (prev === 3 ? 0 : prev + 1))

    console.log(imgData);
    return (
        <Wrapper>
            <ImgBoxs>
                <AnimatePresence>
                    {[0, 1, 2, 3].map((i) => (
                        i === show
                            ?
                            <Img
                                key={i}
                                src={imgData?.[i].originimgurl ? imgData?.[i].originimgurl
                                    : "/no_img.png"}
                                variants={imgAnimation}
                                initial="invisible"
                                animate="visible"
                                exit="exit"
                            />
                            : null
                    ))}
                </AnimatePresence>
            </ImgBoxs>
            {imgData?.length === 4
                ?
                <NextBtn onClick={nextClick}>next</NextBtn>
                : "추가 이미지가 없어요."
            }
        </Wrapper>
    );
}

export default MoreImg;