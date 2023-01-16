import { useState, useEffect } from "react";

export const useActiveStatus = (status) => {
  const [activeStatus, setActiveStatus] = useState([]);

  const getActiveStatus = () => {
    const activeStatus = status.filter((item) => item.active === true);
    return activeStatus.map((item) => item.value);
  };

  useEffect(() => {
    setActiveStatus(getActiveStatus());
  }, [status]);

  return activeStatus;
};
