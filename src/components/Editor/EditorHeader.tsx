import { Button } from '../../components/ui/button';
import { Code, Save, PlayIcon, RefreshCw } from 'lucide-react';

function EditorHeader() {
  return (
    <div className='flex items-center justify-between p-4 bg-card border-b'>
      <div className='flex items-center gap-2'>
        <Code className='size-10 bg-primary p-2 rounded-xl' />
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold'>CodeBuddies</h1>
          <p className='text-sm text-muted-foreground'>
            My Collaborative Project
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant='outline' size='lg' className='rounded-xl'>
          <Save className='mr-2' />
          Save
        </Button>
        <div className='flex items-center gap-1 p-1 bg-card border rounded-xl'>
          <Button disabled={true} className={`rounded-xl `}>
            <PlayIcon className='mr-2' />
            Run
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-xl hover:bg-white/10'
            onClick={() => window.location.reload()}
          >
            <RefreshCw className='size-5' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditorHeader;
