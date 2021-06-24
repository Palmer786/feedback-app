/// <reference types="react-scripts" />
interface ISelector {
  isMenuOpen: boolean;
  firestore: {
    ordered: {
      users: User[];
      feedback: Feedback[];
    };
  };
  firebase: {
    auth: {
      uid: string;
    };
    profile: {
      isLoaded: boolean;
      isEmpty: boolean;
      displayName: string;
      avatarUrl: string;
      skills: string[];
      proffesion: string;
      ratedUsers: string[];
    };
  };
}

interface User {
  id: string;
  email: string;
  proffesion: string;
  displayName: string;
  avatarUrl: string;
  skills: string[];
}

interface Feedback {
  id: string;
  whatIsFrong: string;
  advice: string;
  userID: string;
}
