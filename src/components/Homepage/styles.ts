import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  min-height: 840px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled.div`
  height: 50%;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledImg = styled.img`
  height: 100%;
  user-select: none;
`;

export const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.color.gray};
  font-size: 5.0rem;
  font-weight: 300;
  margin: 0;
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: 1.8rem;
`;