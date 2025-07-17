type TestimonialCardProps = {
  name: string;
  role: string;
  content: string;
  avatar: string;
};
function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className='p-6 bg-card text-card-foreground border-2 h-[170px] space-y-4 rounded-xl flex flex-col'>
      <p className='text-muted-foreground '>{content}</p>
      <div className='flex items-center gap-4'>
        <p className='bg-primary text-primary-foreground rounded-full p-2'>
          {avatar}
        </p>
        <div className='flex flex-col gap-1'>
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
