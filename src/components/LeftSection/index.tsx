import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Wrapper = styled.div`
  width: 25%;
  height: 100%;
  background: #22282d;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: row;
  align-items: center;
  margin-left: 22%;
`;

const LeftSection: React.FC = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
    </Wrapper>
  );
};

export default LeftSection;
