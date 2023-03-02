const BASE_PATH = "	http://apis.data.go.kr/B551011/KorService";

const API_KEY = "9%2Bmjut77JeCgLpJnD6eoWV7TctBLzXUqwzvjS5DZS4cXBdUNbCP7uYZFMMFwhFHAmVkgOYxFi05sxTE6zqSqKA%3D%3D";

const TYPE = "_type=json";

export function getTourism() {
    return fetch(`${BASE_PATH}/areaBasedList?numOfRows=12&pageNo=3&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${API_KEY}&${TYPE}&listYN=Y&arrange=A&contentTypeId=12&areaCode=1`).then(
        (response) =>
            console.log(response.body)
    );
  }