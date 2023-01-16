import { useState, useEffect } from "react";

export const useFilteredList = (status, productRequests) => {
  const [filteredList, setFilteredList] = useState([]);

  const filterByMultipleStatus = (status) => {
    if (status.length === 0 || status[0] === "all") return productRequests;

    const filteredByStatus = productRequests.filter((productRequest) => {
      return status.includes(productRequest.category);
    });

    return filteredByStatus;
  };

  useEffect(() => {
    setFilteredList(filterByMultipleStatus(status));
  }, [status]);

  return filteredList;
};
