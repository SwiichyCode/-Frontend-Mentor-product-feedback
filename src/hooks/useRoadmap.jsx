import { useFeedbackStore } from "../stores/feedbackStore";
import { initialStatus } from "../components/view/RoadmapList/utils";

export const useRoadmap = () => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const status = initialStatus(feedbacks);
  const roadmap = getRoadmap(status);

  function getRoadmap(status) {
    return feedbacks.filter((feedback) => status.includes(feedback.status));
  }

  function roadmapLength(status) {
    return roadmap.filter((feedback) => feedback.status === status).length;
  }

  return { roadmapLength, status, roadmap };
};
