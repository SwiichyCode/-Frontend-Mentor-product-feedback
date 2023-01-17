import { useState } from "react";
import { useRoadmap } from "../../../hooks/useRoadmap";
import * as S from "./styles.js";

export const TabsNavigation = ({ handleChange }) => {
  const [tabs, setTabs] = useState([
    { id: 2, name: "planned", active: false, theme: "#F49F85" },
    { id: 3, name: "in-progress", active: false, theme: "#AD1FEA" },
    { id: 4, name: "live", active: false, theme: "#62BCFA" },
  ]);

  const { roadmapLength } = useRoadmap();

  const handleClick = (id) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === id) {
        return { ...tab, active: true };
      }
      return { ...tab, active: false };
    });
    setTabs(newTabs);
  };

  return (
    <S.Box>
      <S.Tabs onChange={handleChange}>
        {tabs.map(({ id, name, active, theme }) => {
          return (
            <S.Tab
              key={id}
              active={active}
              theme={theme}
              onClick={() => handleClick(id)}
            >
              {name} ({roadmapLength(name)})
            </S.Tab>
          );
        })}
      </S.Tabs>
    </S.Box>
  );
};
