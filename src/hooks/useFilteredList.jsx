import { useState, useEffect } from "react";
import { useFeedbackStore } from "../stores/feedbackStore";
import { useCategoryStore } from "../stores/categoryStore";
import { useActiveStatus } from "./useActiveStatus";

export const useFilteredList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const category = useCategoryStore((state) => state.category);
  const activeCategory = useActiveStatus(category);
  const { productRequests } = feedbacks;

  const filterByMultipleStatus = (status) => {
    if (status.length === 0 || status[0] === "all") return productRequests;

    const filteredByStatus = productRequests.filter((productRequest) => {
      return status.includes(productRequest.category);
    });

    return filteredByStatus;
  };

  useEffect(() => {
    setFilteredList(filterByMultipleStatus(activeCategory));
  }, [activeCategory]);

  return filteredList;
};