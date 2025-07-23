import { useEffect, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  FolderOpen,
  PenBox,
  Trash,
} from 'lucide-react';
import { useFileStore } from '../../stores/useFileStore';
import {
  addFile,
  addFolder,
  deleteFile,
  renameFile,
} from '../../utils/fileUtils';
import { Separator } from '../../components/ui/separator';

interface FileNodeType {
  id: string;
  name: string;
  isFolder?: boolean;
  isFile?: boolean;
  content?: string;
  children?: FileNodeType[];
}

interface Props {
  data: FileNodeType[];
}

function RenderFileTree({ data }: Props) {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  const {
    setSelectMultipleItems,
    setContextMenu,
    selectMultipleItems,
    setSelectedActiveItem,
    contextMenu,
    fileTree,
    setFileTree,
    setNewName,
    setInputVisibleForId,
    setInputType,
    inputType,
    inputVisibleForId,
    newName,
    renameId,
    setRenameId,
  } = useFileStore();
  const handleSelectItem = (item: FileNodeType) => {
    if (!selectMultipleItems.find((i) => i.id === item.id)) {
      setSelectMultipleItems([...selectMultipleItems, item]);
    }
    setSelectedActiveItem(item);
  };

  const handleContextMenu = (e: React.MouseEvent, id: string | null) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, id });
  };

  const toggleFolder = (id: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleGlobalClick = () => setContextMenu(null);

  useEffect(() => {
    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  });

  const handleAddFile = () => {
    if (!contextMenu) return;
    setInputVisibleForId(contextMenu.id);
    setInputType('file');
    setNewName('');
    setOpenFolders((prev) => ({
      ...prev,
      [contextMenu.id!]: true,
    }));
    setContextMenu(null);
  };

  const handleAddFolder = () => {
    if (!contextMenu) return;
    setInputVisibleForId(contextMenu.id);
    setInputType('folder');
    setNewName('');
    setOpenFolders((prev) => ({
      ...prev,
      [contextMenu.id!]: true,
    }));
    setContextMenu(null);
  };

  const handleDelete = () => {
    if (!contextMenu) return;
    const newTree = JSON.parse(JSON.stringify(fileTree));
    const updatedTree = deleteFile(newTree, contextMenu.id!);
    setFileTree(updatedTree);
    setContextMenu(null);
  };

  const handleSubmit = (parentId: string | null) => {
    if (!inputType) return;
    const newTree = JSON.parse(JSON.stringify(fileTree));
    let updatedTree;
    if (inputType === 'file') {
      updatedTree = addFile(newTree, parentId, newName);
    } else {
      updatedTree = addFolder(newTree, parentId, newName);
    }
    setFileTree(updatedTree);
    setInputVisibleForId(null);
    setInputType(null);
    setNewName('');
    setContextMenu(null);
  };

  const handleRename = () => {
    if (!contextMenu) return;
    const id = contextMenu.id;
    setRenameId(id);
    setNewName(''); // Clear previous input
  };
  const handleRenameSubmit = (id: string | null | undefined) => {
    if (!renameId || !newName.trim()) return;
    const newTree = JSON.parse(JSON.stringify(fileTree));
    const updatedTree = renameFile(id!, newName, newTree);
    setFileTree(updatedTree);
    setRenameId(null);
    setNewName('');
  };
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className='pl-4 select-none'>
          <div
            className='flex items-center gap-1 cursor-pointer py-0.5'
            onClick={() =>
              item.isFolder ? toggleFolder(item.id) : handleSelectItem(item)
            }
            onContextMenu={(e) => handleContextMenu(e, item.id)}
          >
            {item.isFolder ? (
              openFolders[item.id] ? (
                <>
                  <ChevronDown size={14} />
                  <FolderOpen size={20} className='text-blue-400 mr-1' />
                </>
              ) : (
                <>
                  <ChevronRight size={14} />
                  <Folder size={20} className='text-blue-400 mr-1' />
                </>
              )
            ) : (
              <File size={20} className='text-blue-400 mr-1' />
            )}
            {renameId === item.id ? (
              <input
                autoFocus
                type='text'
                placeholder='Enter new name'
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && handleRenameSubmit(renameId)
                }
                className='p-1 border border-gray-500 rounded m-2 w-40'
              />
            ) : (
              <div className='text-lg'>{item.name}</div>
            )}
          </div>

          {inputVisibleForId === item.id && (
            <div className='flex items-center gap-1 pl-4'>
              {inputType === 'folder' ? (
                <Folder size={20} className='text-blue-400' />
              ) : (
                <File size={20} className='text-blue-400' />
              )}
              <input
                autoFocus
                type='text'
                placeholder={
                  inputType === 'folder' ? 'Enter folder name' : 'Enter file name'
                }
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(item.id)}
                className='p-1 border border-gray-500 rounded m-2 w-40'
              />
            </div>
          )}

          {openFolders[item.id] && item.children && (
            <RenderFileTree data={item.children} />
          )}
        </div>
      ))}

      {contextMenu?.id && (
        <div
          className='absolute z-10 bg-card text-card-foreground border border-gray-700 rounded shadow backdrop-blur-sm'
          style={{
            top: contextMenu.y,
            left: contextMenu.x,
          }}
          onClick={(e) => {
            e.stopPropagation();
            setContextMenu(null);
          }}
        >
          <ul className='list-none p-1'>
            <li
              className='p-1 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-1'
              onClick={handleAddFile}
            >
              <File size={14} className='mr-1' /> New File
            </li>
            <li
              className='p-1 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-1'
              onClick={handleAddFolder}
            >
              <Folder size={14} className='mr-1' /> New Folder
            </li>
            <Separator />
            <li
              className='p-1 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-1'
              onClick={handleRename}
            >
              <PenBox size={14} className='mr-1' /> Rename
            </li>
            <li
              className='p-1 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-1'
              onClick={handleDelete}
            >
              <Trash size={14} className='mr-1 text-red-500' /> Delete
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default RenderFileTree;
