import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  max-height: 30%;
`;

export const FeedbacksHeader = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.black};
`;

export const FeedbacksNumber = styled.span`
  font-size: 1.6rem;
  color: #7a7e81;
`;

export const FeedbacksWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  flex-direction: column;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;