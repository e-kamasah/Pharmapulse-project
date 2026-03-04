import type { Branch } from "@/gql/graphql";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {
  activeBranch: Branch | null;

  setActiveBranch: (branch: Branch | null) => void;

  clearState: () => void;
}

const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      activeBranch: null,

      setActiveBranch: (branch) => set(() => ({ activeBranch: branch })),

      clearState: () => set(() => ({ activeBranch: null })),
    }),
    {
      name: "app-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAppStore;
