import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const allReducers = combineReducers({
  firestore: firestoreReducer,
});

export default allReducers;
