import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AlertDiv = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px;
    background-color: white;
    color: black;
    border-radius: 20px;
    width: 70%;
    height: 70%;
    font-size: 40px;
    text-align: center;

@media (max-width: 450px) {
    height: 55%;
}
`;

function SignUpAlert() {

    const alertShow = useSelector((state: any) => {
        return state.signUpStatus.value
    })
    return (
        <Wrapper>
            <AlertDiv>
                {alertShow}
            </AlertDiv>
        </Wrapper>
    );
}

export default SignUpAlert;