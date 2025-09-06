"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Award, Users, Clock, Lightbulb } from "lucide-react";

export default function About() {
  const [currentPath, setCurrentPath] = useState("/about");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const timelineEvents = [
    {
      year: "2018",
      title: "Founded",
      description: "Greenway Interiors was born from a passion for creating beautiful, functional spaces."
    },
    {
      year: "2020",
      title: "First Major Award",
      description: "Received the 'Best Interior Design Firm' award from the Design Council."
    },
    {
      year: "2022",
      title: "Expanded Services",
      description: "Launched commercial design services and expanded our team to 15 designers."
    },
    {
      year: "2024",
      title: "International Recognition",
      description: "Featured in top design magazines and expanded to serve international clients."
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Designer",
      bio: "With over 15 years of experience, Rajesh brings vision and creativity to every project."
    },
    {
      name: "Priya Sharma",
      role: "Senior Designer",
      bio: "Specializes in sustainable and eco-friendly design solutions."
    },
    {
      name: "Amit Patel",
      role: "Project Manager",
      bio: "Ensures every project runs smoothly from concept to completion."
    },
    {
      name: "Sneha Reddy",
      role: "3D Visualization Specialist",
      bio: "Creates stunning visual representations of design concepts."
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: "Discovery",
      icon: Lightbulb,
      description: "We listen to your needs, preferences, and lifestyle to understand your vision."
    },
    {
      step: 2,
      title: "Concept",
      icon: Users,
      description: "Our team develops initial concepts and mood boards based on your input."
    },
    {
      step: 3,
      title: "Design",
      icon: Clock,
      description: "Detailed drawings, material selection, and 3D visualizations bring your space to life."
    },
    {
      step: 4,
      title: "Implementation",
      icon: Award,
      description: "We oversee the entire process from construction to final styling."
    }
  ];

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
              About <span className="text-accent">Greenway Interiors</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate designers dedicated to creating spaces that inspire, 
              comfort, and reflect your unique personality. With years of experience and a keen 
              eye for detail, we transform houses into homes across our Sathupalli and Tadepalligudem locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="font-body text-lg text-muted-foreground">
              From humble beginnings to industry recognition
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent/30" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8">
                    <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                      <div className="text-accent font-bold text-2xl mb-2">{event.year}</div>
                      <h3 className="font-heading text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="font-body text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-0 flex-shrink-0">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  </div>
                  <div className="w-1/2 pl-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="font-body text-lg text-muted-foreground">
              The creative minds behind your dream spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-body text-sm mb-3">{member.role}</p>
                  <p className="font-body text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="font-body text-lg text-muted-foreground">
              A systematic approach to creating your perfect space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{step.step}</div>
                <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
                <p className="font-body text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}