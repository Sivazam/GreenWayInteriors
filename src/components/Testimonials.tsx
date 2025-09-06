"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      company: "Residential Client",
      content: "Elegant Interiors transformed our house into a dream home. Their attention to detail and understanding of our vision was exceptional. The team was professional, creative, and delivered beyond our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "TechCorp Inc.",
      content: "Working with Elegant Interiors on our office redesign was a fantastic experience. They created a space that perfectly balances functionality with modern aesthetics. Our team loves the new environment!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "General Manager",
      company: "Grand Hotel",
      content: "The hotel lobby redesign exceeded all our expectations. Elegant Interiors captured the luxury and sophistication we wanted while maintaining practical functionality. Guest feedback has been overwhelmingly positive.",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Restaurant Owner",
      company: "Bella Vista",
      content: "The restaurant interior design created the perfect ambiance for our dining concept. The team understood our brand identity and translated it into a beautiful, functional space that our customers love.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "Retail Solutions",
      content: "Our retail store redesign has significantly increased customer engagement and sales. Elegant Interiors created an inviting shopping experience that perfectly represents our brand.",
      rating: 5
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Property Developer",
      company: "Skyline Properties",
      content: "The team at Elegant Interiors consistently delivers outstanding results across all our residential projects. Their expertise in space planning and design is unmatched in the industry.",
      rating: 5
    }
  ];

  const testimonialList = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  const TestimonialCard = ({ testimonial, direction }: { testimonial: Testimonial; direction: "left" | "right" }) => (
    <motion.div
      className="flex-shrink-0 w-80 bg-card rounded-lg shadow-lg border border-border p-6 mx-4"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
          <span className="text-primary-foreground font-bold text-lg">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-heading font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-accent">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {renderStars(testimonial.rating)}
      </div>
      
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        "{testimonial.content}"
      </p>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with our design team.
          </p>
        </motion.div>

        {/* Top Row - Scrolling Left to Right */}
        <div className="mb-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: [0, -3200] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {testimonialList.map((testimonial) => (
                <TestimonialCard key={`top-${testimonial.id}`} testimonial={testimonial} direction="left" />
              ))}
              {/* Duplicate for seamless loop */}
              {testimonialList.map((testimonial) => (
                <TestimonialCard key={`top-dup-${testimonial.id}`} testimonial={testimonial} direction="left" />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Row - Scrolling Right to Left */}
        <div>
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: [-3200, 0] }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {testimonialList.map((testimonial) => (
                <TestimonialCard key={`bottom-${testimonial.id}`} testimonial={testimonial} direction="right" />
              ))}
              {/* Duplicate for seamless loop */}
              {testimonialList.map((testimonial) => (
                <TestimonialCard key={`bottom-dup-${testimonial.id}`} testimonial={testimonial} direction="right" />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-background border border-border rounded-full"
            onClick={() => {
              // Pause/resume animation functionality would go here
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-background border border-border rounded-full"
            onClick={() => {
              // Pause/resume animation functionality would go here
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}