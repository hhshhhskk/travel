const BASE_PATH = "	http://apis.data.go.kr/B551011/KorService";

const API_KEY = "9%2Bmjut77JeCgLpJnD6eoWV7TctBLzXUqwzvjS5DZS4cXBdUNbCP7uYZFMMFwhFHAmVkgOYxFi05sxTE6zqSqKA%3D%3D";

const TYPE = "_type=json";


export const areaTrip = async (areaCodeNum: number) => {
    return await fetch(`${BASE_PATH}/areaBasedList?numOfRows=10&pageNo=3&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&${TYPE}&listYN=Y&arrange=A&contentTypeId=12&areaCode=${areaCodeNum}`)
        .then(
            (res) => {
                console.log(res.json());
        }
    )
}
