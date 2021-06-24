import React from "react";

import { SpinnerContainer, Spinner } from "./styles";

const AvatarLoadingSpinner: React.FC = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default AvatarLoadingSpinner;
