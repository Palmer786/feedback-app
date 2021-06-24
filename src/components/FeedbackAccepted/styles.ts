import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  width: 75%;
  min-height: 840px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptopL} {
    width: 70%;
  }

  @media ${device.laptop} {
    width: 65%;
  }

  @media ${device.tablet} {
    width: 100%;
    min-height: auto;
    height: 80vh;
  }
`;

export const ContentBox = styled.div`
  height: 50%;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media ${device.laptopL} {
    width: 45%;
  }

  @media ${device.laptop} {
    width: 60%;
  }

  @media ${device.tablet} {
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledImg = styled.img`
  height: 60px;
  width: 60px;
  user-select: none;
`;

export const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.color.gray};
  font-size: 5rem;
  font-weight: 300;
  margin: 0;

  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: 1.8rem;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;
