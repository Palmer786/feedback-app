import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleWrapper = styled.div`
  position: relative;
  height: 1.5rem;
  width: 6rem;
  display: flex;
  flex-direction: row;
  background: transparent;
  justify-content: center;
  align-items: center;
`;

export const FirstCircle = styled.div`
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

export const SecondCircle = styled(FirstCircle)`
  animation: circle-animation 0.5s ease-in-out infinite 0.1s;
`;

export const ThirdCircle = styled(FirstCircle)`
  animation: circle-animation 0.5s ease-in-out infinite 0.2s;
`;
