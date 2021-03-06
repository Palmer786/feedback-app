import React from "react";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

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
