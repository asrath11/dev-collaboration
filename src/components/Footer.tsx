import { Code, Github } from 'lucide-react';

function Footer() {
  return (
    <footer className='border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center gap-2 mb-4 md:mb-0'>
            <div className='flex items-center justify-center w-8 h-8 bg-primary rounded-md'>
              <Code className='h-5 w-5 text-primary-foreground' />
            </div>
            <span className='text-xl font-bold text-foreground'>
              CodeTogether
            </span>
          </div>

          <div className='flex items-center gap-6 text-sm text-muted-foreground'>
            <a href='#' className='hover:text-foreground transition-colors'>
              Privacy
            </a>
            <a href='#' className='hover:text-foreground transition-colors'>
              Terms
            </a>
            <a href='#' className='hover:text-foreground transition-colors'>
              Support
            </a>
            <a
              href='#'
              className='hover:text-foreground transition-colors flex items-center gap-1'
            >
              <Github className='h-4 w-4' />
              GitHub
            </a>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground'>
          © 2025 CodeBuddies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
