import { Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { IoIosRocket } from 'react-icons/io';
import { ArrowRight, PlayIcon } from 'lucide-react';
import CodePreview from './CodePreview';
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <section className='my-10 md:my-20 lg:my-28 px-4 sm:px-6'>
      <div className='flex flex-col items-center justify-center h-full gap-4 max-w-7xl mx-auto my-12'>
        <div className='flex items-center justify-center bg-white/20 hover:bg-white/15 transition-all duration-300 rounded-4xl p-2 sm:p-3 gap-2 px-2 w-fit mx-auto'>
          <Star className='size-4' />
          <h1 className='text-sm'>Now with real-time collaboration</h1>
        </div>
        <div className='space-y-4 w-full md:w-4/5 lg:w-2/3 xl:w-1/2 text-center'>
          <div className='flex flex-col items-center justify-center gap-1 sm:gap-2'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              Code Together,
            </h1>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight'>
              Ship Faster
            </h1>
          </div>
          <p className='text-md sm:text-base text-muted-foreground max-w-2xl mx-auto px-4'>
            The modern collaborative code editor that brings your team together.
            Real-time editing, integrated communication, and seamless sharing -
            all in one place.
          </p>
        </div>
        <div className='flex items-center justify-center space-x-7 my-5'>
          <Button
            variant='default'
            size='lg'
            className='rounded-xl p-10'
            onClick={() => handleNavigate('/sign-in')}
          >
            <IoIosRocket className='mr-2' />
            <h1 className='text-xl'>Start Coding Together</h1>
            <ArrowRight className='ml-2' />
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='rounded-xl p-10'
            onClick={() => handleNavigate('/sign-in')}
          >
            <PlayIcon className='mr-2 text-primary' />
            <h1 className='text-xl text-primary'>Try Demo</h1>
          </Button>
        </div>
      </div>
      <CodePreview />
    </section>
  );
}

export default Hero;
