import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './data';
function Testimonials() {
  return (
    <section className='px-20 py-10'>
      <div className='py-10 space-y-4'>
        <h1 className='text-4xl font-bold text-center'>
          Loved by developers worldwide
        </h1>
        <p className='text-xl text-muted-foreground text-center'>
          See what teams are saying about CodeBuddies
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:space-x-10 gap-10'>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
