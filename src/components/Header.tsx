import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <Link to="/Login">
            로그인
          </Link>
        </Login>
      </Col>
    </Nav>
  );
}

export default Header;