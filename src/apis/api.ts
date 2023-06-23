import { BASE_PATH, API_KEY, TYPE, DATA_NUMBER } from "./const";

// AI
export function aiChat(question: any) {
    return fetch(`http://20.232.117.252/GPT?q=${question}`)
        .then(
            (response) => response.json()
    )
}


// 여행지 API
export function areaTrip(areaCodeNum: number, pageNo: number) {
    return fetch(`${BASE_PATH}/areaBasedList1?serviceKey=${API_KEY}&${TYPE}&pageNo=${pageNo}&numOfRows=${DATA_NUMBER}&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCodeNum}`)
        .then(
            (response) => response.json()
    
    )
}

export function areaTripDetail(contentId: number) {
    return fetch(`${BASE_PATH}/detailCommon1?${TYPE}&serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&contentId=${contentId}&defaultYN=Y&firstImageYN=Y&overviewYN=Y&addrinfoYN=Y`)
        .then(
            (response) => response.json()
    
    )
}

export function areaTripIntro(contentId: number, contentTypeId?: number) {
    return fetch(`${BASE_PATH}/detailIntro1?${TYPE}&ServiceKey=${API_KEY}&contentTypeId=${contentTypeId}&contentId=${contentId}&MobileOS=ETC&MobileApp=AppTest`)
        .then(
            (response) => response.json()
    )
}

export function MoreImages(contentId: number) {
    return fetch(`${BASE_PATH}/detailImage1?_type=json&serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentId}&imageYN=Y&subImageYN=Y`)
        .then(
            (response) => response.json()
    )
}

// 회원가입 
export function SignUpApi(name: any, id: any, password: any, passwordcheck: any) {
    return fetch(`http://localhost:8080/user/signup/insert`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                id,
                password,
                passwordcheck,
            }),
        }).then(async (result) => {
            const r = await result.json();
            alert(r.message);
            if (r.status === "성공") {
                window.location.href = '/';
            }
    }).catch((error) => console.log(error))
}