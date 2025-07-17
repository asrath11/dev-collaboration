import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
function CTASection() {
  return (
    <section className='px-20 py-10 bg-gradient-to-r from-black/5 to-primary/10 text-primary-foreground'>
      <div className='py-10 space-y-4'>
        <h1 className='text-4xl font-bold text-center'>
          Ready to transform your workflow?
        </h1>
        <p className='text-xl text-muted-foreground text-center'>
          Join thousands of developers who are already coding together with
          CodeBuddies.
        </p>
      </div>
      <div className='flex items-center justify-center gap-8'>
        <Button className='rounded-xl py-8' size='lg'>
          <h1 className='text-lg'>Get Started Free</h1>
          <ArrowRight className='ml-2' />
        </Button>
        <Button className='rounded-xl py-8' size='lg' variant='outline'>
          Sign In
        </Button>
      </div>
      <p className='text-sm text-muted-foreground mt-6 text-center'>
        No credit card required • Free forever plan available
      </p>
    </section>
  );
}
export default CTASection;
