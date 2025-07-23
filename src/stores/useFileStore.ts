import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FileNodeType } from '../types/index';
import data from '../components/FileExplorer/data.json';

interface ContextMenuType {
  x: number;
  y: number;
  id: string | null;
}

interface FileStore {
  fileTree: FileNodeType[];
  renameId: string | null;
  newName: string;
  inputType: 'file' | 'folder' | null;
  inputVisibleForId: string | null;
  setInputType: (type: 'file' | 'folder' | null) => void;
  setInputVisibleForId: (id: string | null) => void;
  setNewName: (name: string) => void;
  setRenameId: (id: string | null) => void;
  setFileTree: (tree: FileNodeType[]) => void;
  contextMenu: ContextMenuType | null;
  setContextMenu: (menu: ContextMenuType | null) => void;
  selectMultipleItems: FileNodeType[];
  setSelectMultipleItems: (items: FileNodeType[]) => void;
  selectedActiveItem: FileNodeType | null;
  setSelectedActiveItem: (item: FileNodeType | null) => void;
  handleRemoveItem: (id: string) => void;
}

export const useFileStore = create(
  persist<FileStore>(
    (set) => ({
      fileTree: data,
      renameId: null,
      newName: '',
      inputType: null,
      inputVisibleForId: null,
      setInputType: (type) => set({ inputType: type }),
      setInputVisibleForId: (id) => set({ inputVisibleForId: id }),
      setNewName: (name) => set({ newName: name }),
      setRenameId: (id) => set({ renameId: id }),
      setFileTree: (tree) => set({ fileTree: tree }),
      contextMenu: null,
      setContextMenu: (menu) => set({ contextMenu: menu }),
      selectMultipleItems: [],
      setSelectMultipleItems: (items) => set({ selectMultipleItems: items }),
      selectedActiveItem: null,
      setSelectedActiveItem: (item) => set({ selectedActiveItem: item }),
      handleRemoveItem: (id: string) => {
        set((prev) => {
          const newItems = prev.selectMultipleItems.filter(
            (item) => item.id !== id
          );
          const newActive =
            prev.selectedActiveItem?.id === id
              ? newItems.length > 0
                ? newItems[newItems.length - 1]
                : null
              : prev.selectedActiveItem;
          return { selectMultipleItems: newItems, selectedActiveItem: newActive };
        });
      },
    }),
    {
      name: 'file-store',
      partialize: (state) =>
        ({
          fileTree: state.fileTree,
          selectedActiveItem: state.selectedActiveItem,
          selectMultipleItems: state.selectMultipleItems,
        } as unknown as FileStore),
    }
  )
);
