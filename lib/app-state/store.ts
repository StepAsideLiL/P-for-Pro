import { create } from "zustand";

type NavbarStore = {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (sideMenuState: boolean) => void;
};

export const useStore = create<NavbarStore>((set) => ({
  isSideMenuOpen: false,
  setIsSideMenuOpen: (sideMenuState: boolean) =>
    set(() => ({ isSideMenuOpen: sideMenuState })),
}));
