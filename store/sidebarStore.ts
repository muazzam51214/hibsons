import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useSidebarStore = create(
  persist<SidebarState>(
    (set) => ({
      isOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      close: () => set({ isOpen: false }),
    }),
    {
      name: 'sidebar-state',
    }
  )
);