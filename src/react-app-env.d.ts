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
      fullName: string;
    };
  };
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}
