import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const SingleSkillContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SingleSkillName = styled.p`
  color: #7a7e81;
  font-size: 1.4rem;
`;

export const SkillRating = styled.p`
  color: #7a7e81;
  font-size: 1.2rem;
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

export const StarIcon = styled(FaStar)<{ rating: number; ratingvalue: number }>`
  width: 14%;
  height: 42%;
  color: ${({ theme, rating, ratingvalue }) =>
    ratingvalue - 0.2 <= rating ? theme.color.red : theme.color.lighterGray};
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HalfStarIcon = styled(FaStarHalfAlt)`
  width: 14%;
  height: 42%;
  color: ${({ theme }) => theme.color.red};
`;
