import React from "react";
import { useRoadmap } from "../../../hooks/useRoadmap";
import { useTabsStore } from "../../../stores/tabsStore";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { RoadmapColumn } from "../RoadmapColumn";
import * as S from "./styles.js";

export const RoadmapList = () => {
  const tabs = useTabsStore((state) => state.tabs);
  const activeTab = useTabsStore((state) => state.getActiveTab);
  const { roadmapLength, status, roadmap } = useRoadmap();
  const size = useWindowSize();

  return (
    <S.Main>
      {size.width <= 868
        ? status
            .filter((item) => item === activeTab(tabs))
            .map((status, index) => {
              return (
                <RoadmapColumn
                  status={status}
                  index={index}
                  roadmap={roadmap}
                  roadmapLength={roadmapLength}
                />
              );
            })
        : status.map((status, index) => {
            return (
              <RoadmapColumn
                status={status}
                index={index}
                roadmap={roadmap}
                roadmapLength={roadmapLength}
              />
            );
          })}
    </S.Main>
  );
};
