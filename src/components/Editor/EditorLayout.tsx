import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../../components/ui/resizable';
import CodeEditor from './CodeEditor';
import OutputPanel from './OutputPanel';
import FileSystemApp from '../FileExplorer/FileExplorer';
import { useFileContext } from '../../contexts/FileContext';
import { XIcon } from 'lucide-react';

function EditorLayout() {
  const {
    selectedMultipleItems,
    setSelectActiveItem,
    selectActiveItem,
    setSelectedMultipleItems,
  } = useFileContext();
  return (
    <div className='flex flex-col h-[calc(100vh-72px)]'>
      <ResizablePanelGroup
        direction='vertical'
        className='flex-1 rounded-lg border-t-0 rounded-t-none'
      >
        <ResizablePanel defaultSize={70} minSize={30}>
          <ResizablePanelGroup direction='horizontal' className='h-full'>
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <FileSystemApp />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60} minSize={40} maxSize={70}>
              <div className='text-sm flex gap-1'>
                {selectedMultipleItems.map((item) => (
                  <span
                    key={item.id}
                    className={`bg-white/10 p-2 cursor-pointer ${
                      item.id === selectActiveItem?.id ? 'bg-white/30' : ''
                    }`}
                    onClick={() => setSelectActiveItem(item)}
                  >
                    <div className='flex items-center gap-1'>
                      {item.name}
                      <XIcon
                        size={14}
                        onClick={() =>
                          setSelectedMultipleItems((prev) =>
                            prev.filter((i) => i.id !== item.id)
                          )
                        }
                      />
                    </div>
                  </span>
                ))}
              </div>
              <CodeEditor />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <div className='flex h-full flex-col'>
                <h2 className='p-2 border-b bg-muted/10 text-sm font-medium'>
                  Collaboration
                </h2>
                <div className='flex-1 p-4 text-muted-foreground text-sm'>
                  Coming soon: Real-time collaboration
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
          <OutputPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default EditorLayout;
