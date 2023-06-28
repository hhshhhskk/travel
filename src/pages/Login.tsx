import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  display: flex;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loginform = styled.form`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px;
  color: black;
  border-radius: 20px;
  width: 70%;
  height: 60%;
  font-size: 40px;
  text-align: center;

  @media (max-width: 450px) {
    height: 50%;
}
`;

const LoginTitle = styled.div`
  font-size: 66px;
  padding: 10%;
  color: skyblue;

`;

const IdBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 15px;
  border-style: none none solid none;
  border-bottom-color: rgb(233, 233, 233);
  padding-left: 10px;

  @media (max-width: 450px) {
    width: 250px;
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
    width: 250px;
}
`;

const LoginButton = styled.button`
  cursor: pointer;
  width: 500px;
  height: 40px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);

  @media (max-width: 450px) {
    width: 250px;
}
`;
const InfoBox = styled.div`
  font-size: 14px;
  color: black;
  margin-top: 10%;
  margin-right: 3%;
  text-align: right;
  cursor: pointer;
`;

function Login() {
    const navigate = useNavigate();
    const onSignUp = () => {
        navigate(`/SignUp`);
    };

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        const id = e.target.id.value;
        const password = e.target.password.value;
        fetch(`http://localhost:8080/user/login`,
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
                    window.location.href = '/';
                }
            })
    };

    return (
        <Wrapper
            initial={{ y: -400 }}
            animate={{
                y: 0,
                transition: {
                    duration: 0.5,
                },
            }}
        >
            <Loginform onSubmit={onSubmitHandler}>
                <LoginTitle>Login</LoginTitle>
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
                <LoginButton>Login</LoginButton>
                <InfoBox>
                    <div onClick={onSignUp}>회원이 아니신가요?</div>
                    <div>비밀번호가 기억 안 날 때</div>
                </InfoBox>
            </Loginform>
        </Wrapper>
    );
}

export default Login;