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
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;


const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.li`
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
      </Col>
    </Nav>
  );
}

export default Header;
