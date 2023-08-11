import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderDiv = styled.div<Scrolledprops>`
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  top: 0;
  font-size: 44px;
  padding: 20px 60px;
  background-color: ${props => (props.scrolled ? '#ffffff' : '#f7323f')};
  box-shadow: ${props => (props.scrolled ? '0px 2px 5px rgba(0, 0, 0, 0.2)' : 'none')};
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: "kcc";

  @media (max-width: 450px) {
    font-size: 30px;
    position: absolute;
}
`;

const Home = styled.div<Scrolledprops>`
  display: flex;
  color: ${props => (props.scrolled ? '#f7323f' : '#ffffff')};
  @media (max-width: 450px) {
    font-size: 13px;
}
`;

const Items = styled.div<Scrolledprops>`
  display: flex;
  width: 40%;
  color: ${props => (props.scrolled ? '#000000' : '#ffffff')};
  font-size: 33px;
  justify-content: space-around;
  @media (max-width: 450px) {
    font-size: 13px;
}
`;

const Item = styled.div`
  margin-right: 20px;
  display: flex;
  width: 30%;
  justify-content: space-around;
  &:hover {
    color: blue;
  }
`;

const Logined = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 450px) {
    width: 18vh;
}
`;

const LogineBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
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



interface Scrolledprops {
  scrolled: boolean;
}

function Header() {
  const [loggedIn, setLoggedIn] = useState<Boolean>(false);
  const [scrolled, setScrolled] = useState(false);
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

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    <HeaderDiv scrolled={scrolled}>
      <Home scrolled={scrolled}>
        <Item>
          <Link to="/">
            Home
          </Link>
        </Item>
      </Home>
      <Items scrolled={scrolled}>
        <Link to="/AIchat">
          AI
        </Link>
      </Items>
      <Items scrolled={scrolled}>
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
          <LogineBtn>
            <Link to="/Login">
              로그인
            </Link>
          </LogineBtn>
        }
      </Items>
    </HeaderDiv>
  );
}

export default Header;