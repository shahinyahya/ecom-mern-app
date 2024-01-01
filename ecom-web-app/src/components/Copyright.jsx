import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #9d9d9d;
`;

const Copy = styled.h4`
  color: white;
  display: flex;
  justify-content: center;
`;

const Built = styled.h5`
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Copyright = () => {
  return (
    <Container>
      <Copy>&copy; 2022 Ecomiti. All rights reserved.</Copy>
      <Built>This site is built and managed by Mr.Shabeeb.</Built>
    </Container>
  );
};

export default Copyright;
