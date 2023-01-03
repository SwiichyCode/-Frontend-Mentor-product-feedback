import create from "zustand";
export const initialState = ["Feature", "UI", "UX", "Enhancement", "Bug"];

export const useFeedbackStatusStore = create((set) => ({
  feedbackStatus: initialState,
  addFeedbackStatus: (feedbackStatus) => {
    set({
      feedbackStatus: [...feedbackStatus],
    });
  },
}));
