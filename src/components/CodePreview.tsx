function CodePreview() {
  return (
    <div className='relative max-w-5xl mx-auto'>
      <div className='bg-card border border-border rounded-xl shadow-2xl overflow-hidden'>
        <div className='bg-muted px-4 py-3 flex items-center gap-2 border-b border-border'>
          <div className='flex gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500'></div>
            <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
          </div>
          <span className='text-sm text-muted-foreground ml-4'>
            CodeTogether Editor
          </span>
        </div>
        <div className='p-6 bg-editor text-sm font-mono'>
          <div className='space-y-2'>
            <div className='text-blue-400'>// Welcome to CodeTogether! 🚀</div>
            <div className='text-gray-300'>
              <span className='text-purple-400'>function</span>{' '}
              <span className='text-yellow-300'>collaborativeCode</span>
              () {'{'}
            </div>
            <div className='text-gray-300 pl-4'>
              <span className='text-blue-400'>console</span>.
              <span className='text-yellow-300'>log</span>(
              <span className='text-green-400'>
                'Coding together is amazing!'
              </span>
              );
            </div>
            <div className='text-gray-300'>{'}'}</div>
            <div className='mt-4 flex items-center gap-2'>
              <div className='w-2 h-4 bg-primary animate-pulse'></div>
              <span className='text-xs text-primary'>Sarah is typing...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodePreview;
