import styled from "styled-components";
import { motion } from "framer-motion";
import { SignUpApi } from "../apis/api";

const Wrapper = styled(motion.div)`
  display: flex;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpform = styled.form`
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

const SignUpTitle = styled.div`
    font-size: 66px;
    padding: 10%;
    color: skyblue;

@media (max-width: 450px) {
    font-size: 45px;
}
`;

const IdBox = styled.input`
    width: 500px;
    height: 40px;
    font-size: 15px;
    border-style: none none solid none;
    border-bottom-color: rgb(233, 233, 233);
    padding-left: 10px;

@media (max-width: 450px) {
    width: 90%;
    font-size: 12px;
}
`;

const PwBox = styled.input`
    width: 500px;
    height: 40px;
    font-size: 15px;
    border-style: none none solid none;
    border-bottom-color: rgb(233, 233, 233);
    padding-left: 10px;

@media (max-width: 450px) {
    width: 90%;
    font-size: 12px;
}
`;

const CreateButton = styled.button`
    cursor: pointer;
    width: 500px;
    height: 40px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    margin-top: 10%;

@media (max-width: 450px) {
    width: 90%;
}  
`;

function SignUp() {

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        const name = e.target.name.value;
        const id = e.target.id.value;
        const password = e.target.password.value;
        const passwordcheck = e.target.passwordcheck.value;
        SignUpApi(name, id, password, passwordcheck);
    };
    return (
        <Wrapper>
            <SignUpform onSubmit={onSubmitHandler}>
                <SignUpTitle>
                    회원가입
                </SignUpTitle>
                <div>
                    <IdBox
                        type="text"
                        name="name"
                        placeholder="이름"
                    />
                </div>
                <div>
                    <IdBox
                        type="text"
                        name="id"
                        placeholder="아이디"
                    />
                </div>
                <div>
                    <PwBox
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                    />
                </div>
                <div>
                    <PwBox
                        type="password"
                        name="passwordcheck"
                        placeholder="비밀번호 확인"
                    />
                </div>
                <CreateButton>완료</CreateButton>
            </SignUpform>
        </Wrapper>
    )
}

export default SignUp;