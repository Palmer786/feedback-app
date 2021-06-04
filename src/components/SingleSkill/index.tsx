import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  SingleSkillName,
  SingleSkillContainer,
  StarsContainer,
  StarIcon,
  RadioInput,
  StyledLabel,
} from "./styles";

interface Props {
  skill: string;
  handleSkillRating: (skill: string, value: number) => void;
}

const SingleSkill: React.FC<Props> = ({ skill, handleSkillRating }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const params = useParams();

  useEffect(() => {
    setRating(0);
    setHover(0);
  }, [params]);

  return (
    <SingleSkillContainer key={skill}>
      <SingleSkillName>{skill}</SingleSkillName>
      <StarsContainer>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <StyledLabel key={i}>
              <RadioInput
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <StarIcon
                onClick={() => handleSkillRating(skill, ratingValue)}
                rating={rating}
                ratingvalue={ratingValue}
                hover={hover}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </StyledLabel>
          );
        })}
      </StarsContainer>
    </SingleSkillContainer>
  );
};

export default SingleSkill;
