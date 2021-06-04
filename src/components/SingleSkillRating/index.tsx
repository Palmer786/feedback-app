import React from "react";

import {
  SingleSkillName,
  SingleSkillContainer,
  StarsContainer,
  StarIcon,
  HalfStarIcon,
  NameContainer,
  SkillRating,
} from "./styles";

interface Props {
  skill: string;
  rating: number;
}

const SingleSkillRating: React.FC<Props> = ({ skill, rating = 0 }) => {
  return (
    <SingleSkillContainer key={skill}>
      <NameContainer>
        <SingleSkillName>{skill}</SingleSkillName>
        <SkillRating>{`(${rating})`}</SkillRating>
      </NameContainer>
      <StarsContainer>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          if (rating - ratingValue >= -0.71 && rating - ratingValue <= -0.21) {
            return <HalfStarIcon key={i} />;
          } else {
            return (
              <StarIcon key={i} rating={rating} ratingvalue={ratingValue} />
            );
          }
        })}
      </StarsContainer>
    </SingleSkillContainer>
  );
};

export default SingleSkillRating;
