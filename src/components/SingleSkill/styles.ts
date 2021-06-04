import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const SingleSkillContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    ratingvalue <= (hover || rating) ? theme.color.red : theme.color.lighterGray};
  transition: color 0.1s;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  width: 14%;
  height: 42%;
`;
