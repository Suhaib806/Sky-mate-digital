import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '@/data/testimonials'
import TestimonialCard from '../ui/TestimonialCard'

const TestimonialsGrid = () => {
  return (
    <div>
      {/* Testimonials Grid */}
      <section className="py-20 lg:py-28 ">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="More client stories"
            subtitle="A deeper look at reviews and outcomes—professionalism, speed, and solutions under one roof."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsGrid
