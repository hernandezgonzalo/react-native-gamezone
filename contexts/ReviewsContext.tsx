import React, { createContext, useReducer } from "react";
import { dummyData, reviewType } from "../dummyData";
import { reviewsReducer, reviewActionType } from "../reducers/reviewsReducer";

interface reviewsContextProps {
  reviews: Array<reviewType>;
  reviewsDispatch: ({ type }: reviewActionType) => void;
}

export const ReviewsContext = createContext({} as reviewsContextProps);

export interface ReviewsContextProviderProps {}

const ReviewsContextProvider: React.SFC<ReviewsContextProviderProps> = ({
  children
}) => {
  const [reviews, reviewsDispatch] = useReducer(reviewsReducer, dummyData);

  return (
    <ReviewsContext.Provider value={{ reviews, reviewsDispatch }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContextProvider;
