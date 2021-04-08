/// <reference types="react-scripts" />
interface ISelector {
  firestore: {
    ordered: {
      users: User[];
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
