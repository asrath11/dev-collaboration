import { useEffect, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  FolderOpen,
} from 'lucide-react';
import { useFileContext } from '../../contexts/FileContext';
interface FileNodeType {
  id: string;
  name: string;
  isFolder?: boolean;
  isFile?: boolean;
  content?: string;
  children?: FileNodeType[];
}
function RenderFileTree({ data }: { data: FileNodeType[] }) {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  const {
    setSelectedMultipleItems,
    setContextMenu,
    selectedMultipleItems,
    setSelectActiveItem,
  } = useFileContext();
  const handleSelectItem = (item: FileNodeType) => {
    if (!selectedMultipleItems.find((i) => i.id === item.id)) {
      setSelectedMultipleItems([...selectedMultipleItems, item]);
    }
    setSelectActiveItem(item);
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

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className='pl-4 select-none'>
          <div
            className='flex items-center gap-1 cursor-pointer py-0.5'
            onClick={() =>
              item.isFolder ? toggleFolder(item.id) : handleSelectItem(item)
            }
            onContextMenu={(e) => {
              e.preventDefault();
              setContextMenu({
                x: e.clientX,
                y: e.clientY,
                item,
              });
            }}
          >
            {item.isFolder ? (
              openFolders[item.id] ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )
            ) : (
              <span className='w-[14px]' />
            )}
            {item.isFolder ? (
              openFolders[item.id] ? (
                <FolderOpen size={14} className='text-blue-400' />
              ) : (
                <Folder size={14} className='text-blue-400' />
              )
            ) : (
              <File size={14} />
            )}
            <span>{item.name}</span>
          </div>

          {item.isFolder && openFolders[item.id] && item.children && (
            <RenderFileTree data={item.children} />
          )}
        </div>
      ))}
    </>
  );
}

export default RenderFileTree;
