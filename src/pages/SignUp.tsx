import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Code, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Separator } from '../components/ui/separator';
import { LuGithub } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';

function SignUp() {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center gap-4 p-4 border-2'>
      <div className='w-full max-w-[400px]'>
        <Button variant='ghost' onClick={() => handleNavigate('/')}>
          <ArrowLeft className='mr-2' />
          Back to Home
        </Button>
      </div>
      <Code className='size-10 bg-primary text-primary-foreground p-2 rounded-xl' />
      <h1 className='text-2xl font-bold text-center'>Join CodeBuddies</h1>
      <p className='text-center text-muted-foreground'>
        Create your account and start collaborating
      </p>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-[400px] rounded-xl p-4 flex flex-col space-y-4 bg-card text-card-foreground border-2'
      >
        <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          name='name'
          onChange={handleChange}
          placeholder='Enter your full name'
          className='rounded-xl py-2'
        />
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          name='email'
          onChange={handleChange}
          placeholder='Enter your email'
          className='rounded-xl py-2'
        />
        <div className='flex flex-col space-y-3'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='Enter your password'
            className='rounded-xl py-2'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <Label htmlFor='confirm-password'>Confirm Password</Label>
          <Input
            type='password'
            name='confirm-password'
            onChange={handleChange}
            placeholder='Enter your password again'
            className='rounded-xl py-2'
          />
        </div>
        <Button type='submit' className='w-full rounded-xl py-2'>
          Sign Up
        </Button>
        <div className='relative py-4'>
          <div className='absolute inset-0 flex items-center'>
            <Separator className='w-full' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-card px-2 text-muted-foreground'>
              OR CONTINUE WITH
            </span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <Button variant='outline' className='w-1/2' size='lg'>
            <CiMail className='mr-2 size-5' />
            <h1>Demo</h1>
          </Button>
          <Button variant='outline' className='w-1/2' size='lg'>
            <LuGithub className='mr-2 size-5' />
            <h1>GitHub</h1>
          </Button>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-muted-foreground'>Already have an account?</p>
          <Button variant='link' onClick={() => handleNavigate('/')}>
            Sign In
          </Button>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
