import { File, Folder } from 'lucide-react';
import RenderFileTree from './RenderFileTree';
import { useFileContext } from '../../contexts/FileContext';

const FileExplorer = () => {
  const { contextMenu, setContextMenu, fileTree } = useFileContext();
  return (
    <div className='text-white h-screen flex flex-col w-full border-r border-gray-700'>
      <div className='flex items-center justify-between p-3 border-b border-gray-700'>
        <h2 className='text-sm font-semibold text-gray-300'>EXPLORER</h2>
        <div className='flex space-x-1'>
          <button className='p-1 hover:bg-gray-700 rounded' title='New File'>
            <File size={14} className='text-gray-400' />
          </button>
          <button className='p-1 hover:bg-gray-700 rounded' title='New Folder'>
            <Folder size={14} className='text-gray-400' />
          </button>
        </div>
      </div>
      <RenderFileTree data={fileTree} />
      {contextMenu && (
        <div
          className='absolute z-10 bg-card text-card-foreground border border-gray-700 rounded shadow backdrop-blur-sm'
          style={{
            top: contextMenu.y,
            left: contextMenu.x,
          }}
          onClick={() => setContextMenu(null)}
        >
          <ul className='list-none p-1'>
            <li className='p-1 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-1'>
              <File size={14} className='mr-1' /> New File
            </li>
            <li className='p-1 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-1'>
              <Folder size={14} className='mr-1' /> New Folder
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
