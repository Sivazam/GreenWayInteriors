"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({ testimonials = [] }: TestimonialsSectionProps) {
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      company: "Residential Client",
      content: "Elegant Interiors transformed our house into a dream home. Their attention to detail and creative vision exceeded all our expectations. The team was professional, responsive, and truly understood our style.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "TechCorp Solutions",
      content: "Working with Elegant Interiors on our office redesign was an absolute pleasure. They created a space that perfectly balances functionality with aesthetic appeal. Our team loves the new environment!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "General Manager",
      company: "Grand Hotel Boutique",
      content: "The hotel lobby redesign by Elegant Interiors has received countless compliments from our guests. They captured the essence of luxury and comfort we wanted to convey. Highly recommended!",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Restaurant Owner",
      company: "Bella Vista",
      content: "The restaurant interior design created the perfect ambiance for our dining concept. Customer feedback has been overwhelmingly positive, and we've seen a significant increase in return visits.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "Fashion Forward Retail",
      content: "Elegant Interiors understood our brand identity perfectly and translated it into an amazing retail space. The design has significantly improved our customer experience and sales.",
      rating: 5
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Property Developer",
      company: "Urban Living Developments",
      content: "We've partnered with Elegant Interiors on multiple projects, and they consistently deliver exceptional results. Their designs add tremendous value to our properties.",
      rating: 5
    }
  ];

  const sectionTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  // Split testimonials into two rows
  const firstRow = sectionTestimonials.slice(0, 3);
  const secondRow = sectionTestimonials.slice(3, 6);

  const TestimonialCard = ({ testimonial, direction }: { testimonial: Testimonial; direction: "left" | "right" }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="bg-card rounded-lg shadow-lg border border-border p-6 min-w-[350px] max-w-[400px] mx-4"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-bold text-lg">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-heading font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-accent">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-accent fill-current" : "text-muted-foreground"}`}
          />
        ))}
      </div>

      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-6 h-6 text-accent opacity-30" />
        <p className="font-body text-muted-foreground text-sm leading-relaxed pl-4">
          {testimonial.content}
        </p>
      </div>
    </motion.div>
  );

  const ScrollingRow = ({ 
    testimonials, 
    direction, 
    speed = 30 
  }: { 
    testimonials: Testimonial[]; 
    direction: "left" | "right"; 
    speed?: number;
  }) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (!rowRef.current) return;

      const row = rowRef.current;
      let animationFrame: number;
      let scrollPosition = 0;

      const animate = () => {
        if (!isPaused) {
          scrollPosition += direction === "left" ? 1 : -1;
          
          // Reset position when scrolled through all content
          const maxScroll = row.scrollWidth / 2;
          if (Math.abs(scrollPosition) >= maxScroll) {
            scrollPosition = 0;
          }
          
          row.style.transform = `translateX(${scrollPosition}px)`;
        }
        
        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, [direction, isPaused]);

    return (
      <div 
        className="overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={rowRef}
          className="flex space-x-6 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.id}-${index}`} 
              testimonial={testimonial} 
              direction={direction}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-4">
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
            Don't just take our word for it. Hear what our clients have to say about their experience 
            working with our interior design team.
          </p>
        </motion.div>

        {/* Dual Row Scrolling Testimonials */}
        <div className="space-y-8">
          {/* First Row - Scrolling Left */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-heading text-lg font-semibold mb-4 text-center">Residential Projects</h3>
            <ScrollingRow testimonials={firstRow} direction="left" />
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-heading text-lg font-semibold mb-4 text-center">Commercial Projects</h3>
            <ScrollingRow testimonials={secondRow} direction="right" />
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Years Experience" },
            { number: "25+", label: "Design Awards" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-lg shadow-lg border border-border p-6 text-center"
            >
              <div className="text-3xl font-bold text-accent font-heading mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}