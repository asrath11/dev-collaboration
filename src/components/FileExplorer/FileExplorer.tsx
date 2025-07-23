import { File, Folder } from 'lucide-react';
import RenderFileTree from './RenderFileTree';
import { useFileStore } from '../../stores/useFileStore';
import { addFileToRootLevel, addFolderToRootLevel } from '../../utils/fileUtils';

const FileExplorer = () => {
  const {
    fileTree,
    setFileTree,
    setNewName,
    setInputVisibleForId,
    setInputType,
    inputType,
    inputVisibleForId,
    newName,
  } = useFileStore();
  const handleAdd = (type: 'file' | 'folder') => {
    setInputVisibleForId(null); // Root level
    setInputType(type);
    setNewName('');
  };

  const handleSubmit = () => {
    const newTree = JSON.parse(JSON.stringify(fileTree));
    console.log(newTree);
    let updatedTree;
    if (inputType === 'file') {
      updatedTree = addFileToRootLevel(newTree, newName);
    } else {
      updatedTree = addFolderToRootLevel(newTree, newName);
    }
    setFileTree(updatedTree);
    setInputVisibleForId(null);
    setInputType(null);
    setNewName('');
  };

  return (
    <div className='text-white h-screen flex flex-col w-full border-r border-gray-700'>
      <div className='flex items-center justify-between p-3 border-b border-gray-700'>
        <h2 className='text-sm font-semibold text-gray-300'>EXPLORER</h2>
        <div className='flex space-x-1'>
          <button
            className='p-1 hover:bg-gray-700 rounded'
            title='New File'
            onClick={() => handleAdd('file')}
          >
            <File size={14} className='text-gray-400' />
          </button>
          <button
            className='p-1 hover:bg-gray-700 rounded'
            title='New Folder'
            onClick={() => handleAdd('folder')}
          >
            <Folder size={14} className='text-gray-400' />
          </button>
        </div>
      </div>

      {/* Input at root level */}
      {inputType && inputVisibleForId === null && (
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
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            className='p-1 border border-gray-500 rounded m-2'
          />
        </div>
      )}

      <RenderFileTree data={fileTree} />
    </div>
  );
};

export default FileExplorer;
