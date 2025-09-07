"use client";

import { motion } from "framer-motion";

interface ImageMosaicProps {
  images?: Array<{
    id: number;
    title: string;
    category: string;
    height: "short" | "medium" | "tall";
    imageUrl: string;
    photographer?: string;
  }>;
}

export default function ImageMosaic({ images = [] }: ImageMosaicProps) {
  const defaultImages = [
    { 
      id: 1, 
      title: "Modern Living Room", 
      category: "Residential", 
      height: "tall" as const,
      imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Sidekix Media"
    },
    { 
      id: 2, 
      title: "Luxury Kitchen", 
      category: "Residential", 
      height: "medium" as const,
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Pexels"
    },
    { 
      id: 3, 
      title: "Office Space", 
      category: "Commercial", 
      height: "short" as const,
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Jason Goodman"
    },
    { 
      id: 4, 
      title: "Hotel Lobby", 
      category: "Hospitality", 
      height: "tall" as const,
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Waldemar"
    },
    { 
      id: 5, 
      title: "Bedroom Design", 
      category: "Residential", 
      height: "medium" as const,
      imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Sidekix Media"
    },
    { 
      id: 6, 
      title: "Restaurant Interior", 
      category: "Hospitality", 
      height: "short" as const,
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Unsplash"
    },
    { 
      id: 7, 
      title: "Bathroom Spa", 
      category: "Residential", 
      height: "medium" as const,
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Spacejoy"
    },
    { 
      id: 8, 
      title: "Conference Room", 
      category: "Commercial", 
      height: "tall" as const,
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Jason Goodman"
    },
    { 
      id: 9, 
      title: "Retail Store", 
      category: "Commercial", 
      height: "medium" as const,
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      photographer: "Unsplash"
    },
  ];

  const mosaicImages = images.length > 0 ? images : defaultImages;

  const getHeightClass = (height: string) => {
    switch (height) {
      case "short": return "h-48";
      case "medium": return "h-64";
      case "tall": return "h-80";
      default: return "h-64";
    }
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
            Design <span className="text-accent">Inspiration</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collection of stunning interior design projects that showcase our creativity, 
            attention to detail, and passion for creating exceptional spaces.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {mosaicImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-6 break-inside-avoid group cursor-pointer`}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`relative overflow-hidden rounded-lg shadow-lg ${getHeightClass(image.height)}`}>
                {/* Actual Image */}
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-heading text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="font-body text-sm mb-2">{image.category}</p>
                    {image.photographer && (
                      <p className="font-body text-xs text-white/70">Photo by {image.photographer}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-lg hover:bg-accent/90 transition-colors"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}