import { BASE_PATH, GPT_URL, API_KEY, TYPE, DATA_NUMBER } from "./const";

// AI
export function aiChat(question: any) {
    return fetch(`${GPT_URL}/GPT?q=${question}`)
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

export function WishListApi(id: number, contentid: number) {
    return fetch(`http://localhost:8080/api/wishlist/${id}/${contentid}`)
        .then(
            (response) => response.json()
    )
}

export async function WishListInsertApi(id: number, contentid: number, title: string) {
     await fetch(`http://localhost:8080/api/mypage/insert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            contentid,
            title,
        }),
    }).then(
        async (response) => {
            const r = await response.json();
            console.log(r);
        }
    )
}

export async function WishListDeleteApi(id: number, contentid: number) {
    await fetch(`http://localhost:8080/api/mypage/delete`, {
       method: 'DELETE',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           id,
           contentid,
       }),
   }).then(
       async (response) => {
        const r = await response.json();
        console.log(r);
       }
   )
}

// 회원가입 
export function SignUpApi(name: string, id: string, password: number, passwordcheck: number) {
    return fetch(`http://localhost:8080/api/signup`,
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
            
            if (r.status === "성공") {
                alert(r.message);
                window.location.href = '/Login';
            } else {
                alert(r.message);
            }

    }).catch((error) => console.log(error))
}

// 회원탈퇴
export function SignOutApi(id: string) {
    return fetch(`http://localhost:8080/api/signout/delete`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        }).then(async (result) => {
            const r = await result.json();
            alert(r.message);
            sessionStorage.clear()
            window.location.href = '/';

    }).catch((error) => console.log(error))
}

// 로그인
export function LoginApi(id: string, password: number) {
    return fetch(`http://localhost:8080/api/login`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            password
        }),
    }).then(async (response) => {
        const r = await response.json();
        // console.log(r?.[0].name)
        if (r.status === "실패") {
            alert(r.message);
        } else {
            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem('nickname', r?.[0].name);
            sessionStorage.setItem('id', id);
            window.location.href = '/';
        }
    })
}

// 회원 정보 API
export function UserInfoApi(id: string) {
    return fetch(`http://localhost:8080/api/info`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        }).then(async (result) => {
            const r = await result.json();
            console.log(r);
            })
}

// 마이페이지 API
export function MyPageApi(id: number) {
    return fetch(`http://localhost:8080/api/mypage/${id}`).then(
            (response) => response.json()
    )
}