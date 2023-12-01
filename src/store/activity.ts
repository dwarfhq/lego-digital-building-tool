import { create } from "zustand";
import { Activity } from "../types/types";

type ActivityState = Activity & {
  setActivityOptions: (options: Activity) => void;
};

const useActivityStore = create<ActivityState>((set) => ({
  bricks: [],
  name: "",
  slug: "",
  setActivityOptions: ({ name, slug, bricks }) => set({ name, slug, bricks }),
}));

export default useActivityStore;
