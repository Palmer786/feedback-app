import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  height: 1.5rem;
  width: 6rem;
  display: flex;
  flex-direction: row;
  background: transparent;
  justify-content: center;
  align-items: center;
`;

const FirstCircle = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.red};

  animation: circle-animation 0.5s ease-in-out infinite;

  @keyframes circle-animation {
    50% {
      opacity: 0;
    }
  }
`;

const SecondCircle = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.red};

  animation: circle-animation 0.5s ease-in-out infinite 0.1s;

  @keyframes circle-animation {
    50% {
      opacity: 0;
    }
  }
`;

const ThirdCircle = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.red};

  animation: circle-animation 0.5s ease-in-out infinite 0.2s;

  @keyframes circle-animation {
    50% {
      opacity: 0;
    }
  }
`;

const Loading: React.FC = () => (
  <LoadingContainer>
    <Container>
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
    </Container>
  </LoadingContainer>
);

export default Loading;
