import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import menuReducer from "./menuReducer";

const allReducers = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  isMenuOpen: menuReducer,
});

export default allReducers;
