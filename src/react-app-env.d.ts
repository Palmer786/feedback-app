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
    }
    profile: {
      firstName: string;
      lastName: string;
      isLoaded: boolean;
      isEmpty: boolean;
      displayName: string;
      avatarUrl: string;
    };
  };
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string;
}
