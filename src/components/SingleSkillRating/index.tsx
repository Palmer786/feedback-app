import React from "react";

import {
  SingleSkillName,
  SingleSkillContainer,
  StarsContainer,
  StarIcon,
  HalfStarIcon,
  NameContainer,
  SkillRating,
  RatingContainer,
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
      </NameContainer>
      <RatingContainer>
        <SkillRating>{`(${rating})`}</SkillRating>
        <StarsContainer>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            if (
              rating - ratingValue >= -0.71 &&
              rating - ratingValue <= -0.21
            ) {
              return <HalfStarIcon key={i} />;
            } else {
              return (
                <StarIcon key={i} rating={rating} ratingvalue={ratingValue} />
              );
            }
          })}
        </StarsContainer>
      </RatingContainer>
    </SingleSkillContainer>
  );
};

export default SingleSkillRating;
