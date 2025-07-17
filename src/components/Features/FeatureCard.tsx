type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className='rounded-xl py-6 px-6 bg-card text-card-foreground border-2 h-[170px] space-y-4'>
      <div className='flex items-center space-x-4'>
        {icon}
        <h1 className='text-xl'>{title}</h1>
      </div>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  );
}

export default FeatureCard;
