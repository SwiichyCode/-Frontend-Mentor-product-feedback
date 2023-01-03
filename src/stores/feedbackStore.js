import create from "zustand";
import { persist } from "zustand/middleware";

export const useFeedbackStore = create(
  persist(
    (set, get) => ({
      feedbacks: [],
      addFeedback: (feedback) => {
        set({
          feedbacks: [...get().feedbacks, feedback],
        });
      },
    }),

    {
      name: "feedbacks",
      getStorage: () => localStorage,
    }
  )
);

const initialOptions = [
  { name: "Feature", selected: false },
  { name: "UI", selected: false },
  { name: "UX", selected: false },
  { name: "Enhancement", selected: false },
  { name: "Bug", selected: false },
];

export const useFeedbackOptionsStore = create((set) => ({
  feedbackOptions: initialOptions,

  setSelected: (name) => {
    set({
      feedbackOptions: feedbackOptions.map((option) => {
        if (option.name === name) {
          return {
            ...option,
            selected: !option.selected,
          };
        }
        return option;
      }),
    });
  },
}));
