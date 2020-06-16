import { reviewType } from "../dummyData";

export type reviewActionType = {
  type: "ADD_REVIEW";
  review: reviewType;
};

export const reviewsReducer = (
  state: Array<reviewType>,
  action: reviewActionType
): Array<reviewType> => {
  switch (action.type) {
    case "ADD_REVIEW":
      const newReview = {
        ...action.review,
        key: Math.random().toString(),
        rating: Number(action.review?.rating)
      };
      return [newReview, ...state];

    default:
      return state;
  }
};
