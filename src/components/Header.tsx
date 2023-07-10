import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 44px;
  padding: 20px 60px;
  background-color: white;
  font-family: "kcc";
  @media (max-width: 450px) {
    font-size: 30px;
    position: absolute;
}
`;

const Col = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;


const Items = styled.div`
  display: flex;
`;

const Login = styled.div`
  display: flex;
  font-size:20px;
  @media (max-width: 450px) {
    font-size: 13px;
}
`;

const Logined = styled.div`
  display: flex;
  justify-content: space-around;
  width: 33vh;
  @media (max-width: 450px) {
    width: 18vh;
}
`;

const Mypage = styled.div`
  cursor: pointer;
`
const Logout = styled.div`
  cursor: pointer;
`;

const Item = styled.div`
  margin-right: 20px;
  color: black;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: blue;
  }
`;


function Header() {
  const [loggedIn, setLoggedIn] = useState<Boolean>(false);
  const [nickName, setNickName] = useState<String | null>();
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('id');
  useEffect(() => {
    // 컴포넌트가 마운트될 때, 세션 스토리지에서 로그인 상태를 확인합니다.
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    const name = sessionStorage.getItem('nickname');

    if (isLoggedIn === "true") {
      setNickName(name);
      setLoggedIn(true);
    }
  }, []);

  const onClickedMyPage = () => {
    navigate(`/mypage?id=${userId}`);
  };

  const onClickedLogout = (e: any) => {
    e.preventDefault();
    sessionStorage.clear();
    setLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <Nav>
      <Col>
        <Items>
          <Item>
            <Link to="/">
              Home
            </Link>
          </Item>
          <Item>
            <Link to="/AIchat">
              AI
            </Link>
          </Item>
        </Items>
        <Login>
          {loggedIn
            ?
            <Logined>
              <div>
                {nickName} 님
              </div>
              <Mypage onClick={onClickedMyPage}>
                마이페이지
              </Mypage>
              <Logout onClick={onClickedLogout}>
                로그아웃
              </Logout>
            </Logined>
            :
            <Link to="/Login">
              로그인
            </Link>
          }
        </Login>
      </Col>
    </Nav>
  );
}

export default Header;