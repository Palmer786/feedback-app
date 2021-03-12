/// <reference types="react-scripts" />
interface ISelector {
  firebase: {
    auth: {
      isLoaded: boolean;
      isEmpty: boolean;
    };
    profile: {
      firstName: string;
      lastName: string;
    };
  };
}
