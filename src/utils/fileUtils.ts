import type { FileNodeType } from '../types/index';

export const findParentAndNode = (
  tree: FileNodeType[],
  id: string | null | undefined,
  parent: FileNodeType | null = null
): { parent: FileNodeType | null; node: FileNodeType | null } => {
  for (const node of tree) {
    if (node.id === id) return { parent, node };
    if (node.children) {
      const found = findParentAndNode(node.children, id, node);
      if (found.node) return found;
    }
  }
  return { parent: null, node: null };
};
export const addFolderToRootLevel = (
  tree: FileNodeType[],
  name?: string | undefined
) => {
  return [
    ...tree,
    {
      id: Date.now().toString(),
      name: name || 'New Folder',
      isFolder: true,
      children: [],
    },
  ];
};
export const addFileToRootLevel = (
  tree: FileNodeType[],
  name?: string | undefined
) => {
  return [
    ...tree,
    {
      id: Date.now().toString(),
      name: name || 'New File',
      isFile: true,
      content: '',
    },
  ];
};

export const addFolder = (
  tree: FileNodeType[],
  id: string | null | undefined,
  name?: string | undefined
) => {
  const updatedData = (list: FileNodeType[]) => {
    return list.map((node: FileNodeType): FileNodeType => {
      // Only folders can have children, skip files
      if (!node.isFolder) return node;
      if (node.id === id) {
        return {
          ...node,
          children: [
            ...(node.children || []),
            {
              id: Date.now().toString(),
              name: name || 'New Folder',
              isFolder: true,
              children: [],
            },
          ],
        };
      }

      if (node.children) {
        return {
          ...node,
          children: updatedData(node.children),
        };
      }

      return node;
    });
  };
  return updatedData(tree);
};

export const addFile = (
  tree: FileNodeType[],
  id: string | null | undefined,
  name?: string | undefined
) => {
  const { parent, node } = findParentAndNode(tree, id);

  const target = node?.isFolder ? node : parent;
  if (!target) return tree;

  const updatedData = (list: FileNodeType[]) => {
    return list.map((n): FileNodeType => {
      if (n.id === target.id) {
        return {
          ...n,
          children: [
            ...(n.children || []),
            {
              id: Date.now().toString(),
              name: name || 'New File',
              isFile: true,
              content: '',
            },
          ],
        };
      }
      if (n.children) {
        return {
          ...n,
          children: updatedData(n.children),
        };
      }
      return n;
    });
  };

  return updatedData(tree);
};

export const deleteFile = (tree: FileNodeType[], id: string): FileNodeType[] => {
  const updatedData = (list: FileNodeType[]): FileNodeType[] => {
    return list
      .filter((node) => node.id !== id)
      .map((node) => ({
        ...node,
        children: node.children ? updatedData(node.children) : [],
      }));
  };
  return updatedData(tree);
};

export const renameFile = (id: string, name: string, tree: FileNodeType[]) => {
  const updatedData = (list: FileNodeType[]): FileNodeType[] => {
    return list.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          name,
        };
      }
      if (node.children) {
        return {
          ...node,
          children: updatedData(node.children),
        };
      }
      return node;
    });
  };
  return updatedData(tree);
};
