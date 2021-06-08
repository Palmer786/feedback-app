import React from "react";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";

import SingleFeedback from "./SingleFeedback";

import {
  FeedbacksHeader,
  FeedbacksNumber,
  FeedbacksWrapper,
  MainWrapper,
} from "./styles";
import Loading from "../../Loading";

const MyFeedback: React.FC = () => {
  const uid = useSelector((state: ISelector) => state.firebase.auth.uid);

  const dispatch = useDispatch();

  useFirestoreConnect(
    uid && [
      {
        collection: "users",
        doc: uid,
        subcollections: [{ collection: "feedback" }],
        storeAs: "feedback",
      },
    ]
  );

  const feedbacks = useSelector(
    (state: ISelector) => state.firestore.ordered.feedback
  );

  if (!isLoaded(uid)) dispatch({ type: "ON" });
  if (isLoaded(uid)) dispatch({ type: "OFF" });

  return (
    <MainWrapper>
      <FeedbacksHeader>
        Feedbacks {}
        <FeedbacksNumber>
          {isLoaded(feedbacks) && `(${feedbacks.length})`}
        </FeedbacksNumber>
      </FeedbacksHeader>
      {!isLoaded(feedbacks) ? (
        <Loading />
      ) : (
        <FeedbacksWrapper>
          {feedbacks.map((doc) => (
            <SingleFeedback key={doc.id} doc={doc} />
          ))}
        </FeedbacksWrapper>
      )}
    </MainWrapper>
  );
};

export default MyFeedback;
