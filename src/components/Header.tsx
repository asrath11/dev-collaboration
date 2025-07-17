import { Code } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/sign-in');
  };
  const handleGetStarted = () => {
    navigate('/get-started');
  };
  return (
    <header className='sticky top-0 z-50 p-4 px-20'>
      <nav className='flex items-center justify-between px-6'>
        <div className='absolute top-0 inset-0 backdrop-blur-2xl bg-background/10 border-b-2 z-[-1]'></div>
        <div className='flex items-center gap-3'>
          <Code className='bg-primary text-primary-foreground size-9 rounded-xl p-2 font-bold' />
          <h1 className='text-xl font-bold'>CodeBuddies</h1>
        </div>
        <div className='flex items-center gap-4'>
          <Button
            variant='ghost'
            className='rounded-xl py-2'
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Button className='rounded-xl py-2' onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
