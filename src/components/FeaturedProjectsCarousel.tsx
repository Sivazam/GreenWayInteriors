"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface FeaturedProjectsCarouselProps {
  projects?: Project[];
}

export default function FeaturedProjectsCarousel({ projects = [] }: FeaturedProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const defaultProjects: Project[] = [
    {
      id: 1,
      title: "Minimalist Apartment",
      category: "residential",
      description: "Clean lines and functional design for urban living",
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "commercial",
      description: "Modern workspace designed for productivity and collaboration",
      image: "/project2.jpg"
    },
    {
      id: 3,
      title: "Boutique Hotel",
      category: "hospitality",
      description: "Luxury accommodation with unique character and comfort",
      image: "/project3.jpg"
    },
    {
      id: 4,
      title: "Family Residence",
      category: "residential",
      description: "Warm and inviting home for modern family living",
      image: "/project4.jpg"
    },
    {
      id: 5,
      title: "Restaurant Design",
      category: "hospitality",
      description: "Elegant dining space with ambient atmosphere",
      image: "https://images.unsplash.com/photo-1667388968900-4dc428fedb8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwZGVzaWduJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 6,
      title: "Retail Store",
      category: "commercial",
      description: "Innovative retail space for enhanced shopping experience",
      image: "/project6.jpg"
    }
  ];

  const carouselProjects = projects.length > 0 ? projects : defaultProjects;

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "hospitality", label: "Hospitality" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? carouselProjects 
    : carouselProjects.filter(project => project.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our latest and most celebrated interior design projects that demonstrate our 
            commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-accent text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {filteredProjects.length > 0 && (
            <>
              {/* Main Project Display */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-96 lg:h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <Star className="w-16 h-16 text-accent mx-auto mb-4" />
                      <p className="text-xl font-heading text-muted-foreground mb-2">
                        {filteredProjects[currentIndex].title}
                      </p>
                      <p className="text-muted-foreground font-body">
                        {filteredProjects[currentIndex].category}
                      </p>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-accent text-primary-foreground px-3 py-1 rounded-full text-sm font-body">
                      {filteredProjects[currentIndex].category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="font-heading text-3xl font-bold mb-4">
                      {filteredProjects[currentIndex].title}
                    </h3>
                    <p className="font-body text-lg text-muted-foreground mb-6">
                      {filteredProjects[currentIndex].description}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground font-body">
                        Featured Project
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent text-primary-foreground px-6 py-3 rounded-lg font-body font-medium hover:bg-accent/90 transition-colors self-start"
                    >
                      View Project Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 z-10"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 z-10"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {filteredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="font-body text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}