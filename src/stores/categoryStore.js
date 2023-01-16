import create from "zustand";

const initialValue = [
  { value: "all", text: "All", active: false, id: 1 },
  { value: "ui", text: "UI", active: false, id: 2 },
  { value: "ux", text: "UX", active: false, id: 3 },
  { value: "enhancement", text: "Enhancement", active: false, id: 4 },
  { value: "bug", text: "Bug", active: false, id: 5 },
  { value: "feature", text: "Feature", active: false, id: 6 },
];

export const useCategoryStore = create((set) => ({
  category: initialValue,
  setCategory: (category) => set({ category }),

  // This is the function that will be called when the user clicks on a category
  toggleCategory: (id) => {
    const newCategory = initialValue.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    set({ category: newCategory });
  },
}));
