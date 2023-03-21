import { BASE_PATH, API_KEY, TYPE } from "./const";

export function areaTrip(areaCodeNum: number) {
    return fetch(`${BASE_PATH}/areaBasedList?numOfRows=10&pageNo=3&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&${TYPE}&listYN=Y&arrange=A&contentTypeId=12&areaCode=${areaCodeNum}`)
        .then(
            (response) => {
                response.json();
        }
    )
}

// http://apis.data.go.kr/B551011/KorService/areaBasedList?numOfRows=10&pageNo=3&MobileOS=ETC&MobileApp=AppTest&ServiceKey=9%2Bmjut77JeCgLpJnD6eoWV7TctBLzXUqwzvjS5DZS4cXBdUNbCP7uYZFMMFwhFHAmVkgOYxFi05sxTE6zqSqKA%3D%3D&_type=json&listYN=Y&arrange=A&contentTypeId=12&areaCode=2