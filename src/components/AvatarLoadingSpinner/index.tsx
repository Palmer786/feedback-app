import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 50%;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(0,0,0,0) 77%,rgba(0,0,0,0) 100%);
  border-radius: 50%;
  position: relative;
  animation: rotate 0.5s infinite linear;

  :after {
    position: absolute;
    display: block;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    content: "";
    background-color: whitesmoke;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    overflow: hidden;

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
`;

const AvatarLoadingSpinner: React.FC = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default AvatarLoadingSpinner;
