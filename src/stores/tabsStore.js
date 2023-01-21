import create from "zustand";

const initialValue = [
  { id: 2, name: "planned", active: true, theme: "#F49F85" },
  { id: 3, name: "in-progress", active: false, theme: "#AD1FEA" },
  { id: 4, name: "live", active: false, theme: "#62BCFA" },
];

export const useTabsStore = create((set, get) => ({
  tabs: initialValue,
  setTabs: (tabs) => set({ tabs }),

  toggleTabs: (id) => {
    const newTabs = initialValue.map((item) => {
      if (item.id === id) {
        return { ...item, active: true };
      }
      return { ...item, active: false };
    });
    set({ tabs: newTabs });
  },

  getActiveTab: (tabs) => {
    return tabs.filter((tab) => tab.active)[0].name;
  },
}));
