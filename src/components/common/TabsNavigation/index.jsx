import { useRoadmap } from "../../../hooks/useRoadmap";
import { useTabsStore } from "../../../stores/tabsStore";
import * as S from "./styles.js";

export const TabsNavigation = ({ handleChange }) => {
  const tabs = useTabsStore((state) => state.tabs);
  const toggleTab = useTabsStore((state) => state.toggleTabs);
  const { roadmapLength } = useRoadmap();

  return (
    <S.Box>
      <S.Tabs onChange={handleChange}>
        {tabs.map(({ id, name, active, theme }) => {
          return (
            <S.Tab
              key={id}
              active={active}
              theme={theme}
              onClick={() => toggleTab(id)}
            >
              {name} ({roadmapLength(name)})
            </S.Tab>
          );
        })}
      </S.Tabs>
    </S.Box>
  );
};
