import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: /*linear-gradient(rgba(255, 255, 255, 0.5)),*/
    /* linear-gradient(rgba(255, 255, 255, 0.5)) */ url("https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  position: relative;
  right: -210px;
  ${mobile({ right: "-80px" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE A NEW ACCOUNT</Title>
        <Form>
          <Input placeholder="FirstName" />
          <Input placeholder="LastName" />
          <Input placeholder="UserName" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data on accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>SIGN UP </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
