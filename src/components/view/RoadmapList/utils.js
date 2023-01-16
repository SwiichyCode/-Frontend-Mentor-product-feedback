export const initialStatus = (feedbacks) => {
  return [
    ...new Set(
      feedbacks
        .map((feedback) => feedback.status)
        .filter((status) => status !== "suggestion")
    ),
  ];
};

export const generateSubtitles = (status) => {
  switch (status) {
    case "planned":
      return "Ideas prioritized for research";
    case "in-progress":
      return "Currently being developed";
    case "live":
      return "Released features";
  }
};
