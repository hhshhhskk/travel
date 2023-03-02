import styled from "styled-components";
import { getTourism } from "./api";

const Wrapper = styled.div`
  background: skyblue;
`;

const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-size: cover;
`;

function Main() {
    getTourism();
  return (
    <Wrapper>
          <Banner>
              hi
      </Banner>
    </Wrapper>
  );
}

export default Main;
