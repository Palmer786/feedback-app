import React from "react";

import {
  LoadingContainer,
  CircleWrapper,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
} from "./styles";

const Loading: React.FC = () => (
  <LoadingContainer>
    <CircleWrapper>
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
    </CircleWrapper>
  </LoadingContainer>
);

export default Loading;
