import FeatureCard from './FeatureCard';
import { features } from './data';
function Features() {
  return (
    <section className='p-15 space-y-4 min-h-[60vh] bg-secondary/35'>
      <div className='mb-15 space-y-4'>
        <h1 className='text-4xl font-bold text-center'>
          Everything you need to code together
        </h1>
        <p className='text-center text-xl text-muted-foreground'>
          Powerful features designed for modern development teams
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {features.map((feature, index) => {
          const { icon: Icon, title, description } = feature;
          return (
            <FeatureCard
              key={index}
              icon={
                <Icon className='size-13 text-primary bg-primary/10 p-4 rounded-xl' />
              }
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
