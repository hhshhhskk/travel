import { BASE_PATH, API_KEY, TYPE, DATA_NUMBER } from "./const";

export function aiChat(question: any) {
    return fetch(`http://20.232.117.252/GPT?q=${question}`)
        .then(
            (response) => response.json()
    )
}



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
// http://apis.data.go.kr/B551011/KorService/areaBasedList?numOfRows=10&pageNo=3&MobileOS=ETC&MobileApp=AppTest&ServiceKey=9%2Bmjut77JeCgLpJnD6eoWV7TctBLzXUqwzvjS5DZS4cXBdUNbCP7uYZFMMFwhFHAmVkgOYxFi05sxTE6zqSqKA%3D%3D&_type=json&listYN=Y&arrange=A&contentTypeId=12&areaCode=2