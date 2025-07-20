import React, { createContext, useContext, useState } from 'react';
import data from '../components/FileExplorer/data.json';

interface FileNodeType {
  id: string;
  name: string;
  isFolder?: boolean;
  isFile?: boolean;
  children?: FileNodeType[];
  content?: string;
}

interface ContextMenuType {
  x: number;
  y: number;
  item: FileNodeType | null;
}

interface FileContextType {
  fileTree: FileNodeType[];
  setFileTree: React.Dispatch<React.SetStateAction<FileNodeType[]>>;
  contextMenu: ContextMenuType | null;
  setContextMenu: React.Dispatch<React.SetStateAction<ContextMenuType | null>>;
  selectedMultipleItems: FileNodeType[];
  setSelectedMultipleItems: React.Dispatch<React.SetStateAction<FileNodeType[]>>;
  selectActiveItem: FileNodeType | null;
  setSelectActiveItem: React.Dispatch<React.SetStateAction<FileNodeType | null>>;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [fileTree, setFileTree] = useState<FileNodeType[]>(data);
  const [contextMenu, setContextMenu] = useState<ContextMenuType | null>(null);
  const [selectedMultipleItems, setSelectedMultipleItems] = useState<
    FileNodeType[]
  >([]);
  const [selectActiveItem, setSelectActiveItem] = useState<FileNodeType | null>(
    null
  );

  return (
    <FileContext.Provider
      value={{
        fileTree,
        setFileTree,
        contextMenu,
        setContextMenu,
        selectedMultipleItems,
        setSelectedMultipleItems,
        selectActiveItem,
        setSelectActiveItem,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFileContext must be used within a FileProvider');
  }
  return context;
};
