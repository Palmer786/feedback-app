import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const allReducers = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default allReducers;
