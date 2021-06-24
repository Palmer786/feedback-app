import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { device } from "../../constants/device";

export const SingleSkillContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
    height: 100px;
  }
`;

export const SingleSkillName = styled.p`
  color: #7a7e81;
  font-size: 1.4rem;
`;

export const StarsContainer = styled.div`
  width: 26%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  user-select: none;

  @media ${device.mobileL} {
    width: 50%;
  }
`;

export const StarIcon = styled(FaStar)<{
  rating: number;
  ratingvalue: number;
  hover: number;
}>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${({ theme, rating, ratingvalue, hover }) =>
    ratingvalue <= (hover || rating)
      ? theme.color.red
      : theme.color.lighterGray};
  transition: color 0.1s;

  @media ${device.mobileL} {
    width: 24px;
    height: 24px;
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  width: 14%;
  height: 42%;
`;
