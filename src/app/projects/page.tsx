"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Filter, Eye, Heart } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [currentPath, setCurrentPath] = useState("/projects");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "hospitality", label: "Hospitality" },
    { id: "office", label: "Office" }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      category: "residential",
      description: "A contemporary urban living space with industrial elements",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["Modern", "Urban", "Industrial"]
    },
    {
      id: 2,
      title: "Luxury Hotel Lobby",
      category: "hospitality",
      description: "Elegant and welcoming entrance for a 5-star hotel",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["Luxury", "Hospitality", "Grand"]
    },
    {
      id: 3,
      title: "Tech Startup Office",
      category: "office",
      description: "Innovative workspace designed for creativity and collaboration",
      image: "https://images.unsplash.com/photo-1684394160255-1d52e64db562?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["Modern", "Tech", "Collaborative"]
    },
    {
      id: 4,
      title: "Cozy Family Home",
      category: "residential",
      description: "Warm and inviting family residence with open-concept living",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["Family", "Cozy", "Open-Concept"]
    },
    {
      id: 5,
      title: "Boutique Retail Store",
      category: "commercial",
      description: "Chic shopping space with custom displays and lighting",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["Retail", "Boutique", "Custom"]
    },
    {
      id: 6,
      title: "Restaurant Interior",
      category: "hospitality",
      description: "Intimate dining space with ambient lighting and acoustics",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      tags: ["Restaurant", "Dining", "Ambient"]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPath={currentPath} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Projects</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of transformative interior design projects. 
              Each space tells a unique story of collaboration, creativity, and exceptional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-accent text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent font-body text-sm font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="font-body text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-accent text-primary-foreground py-2 rounded-lg font-body font-medium hover:bg-accent/90 transition-colors"
                  >
                    View Project Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
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

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Start <span className="text-accent">Your Project</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Let's collaborate to create the space of your dreams. Our team is ready to bring your vision to life.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-lg hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
            </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}