import create from "zustand";
import { persist } from "zustand/middleware";

export const useFeedbackStore = create(
  persist(
    (set, get) => ({
      feedbacks: [],
      setFeedbackFromApi: (feedback) => set({ feedbacks: feedback }),
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
