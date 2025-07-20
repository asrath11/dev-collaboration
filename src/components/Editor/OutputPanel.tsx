function OutputPanel() {
  return (
    <div className='h-full flex flex-col'>
      <div className='p-2 border-b bg-muted/10'>
        <h2 className='text-sm font-medium'>Output</h2>
      </div>
      <div className='flex-1 p-4 overflow-auto font-mono text-sm'>
        <div className='text-muted-foreground'>
          Run your code to see the output here
        </div>
      </div>
    </div>
  );
}

export default OutputPanel;
