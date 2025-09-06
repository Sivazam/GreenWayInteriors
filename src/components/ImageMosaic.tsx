"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface ImageMosaicProps {
  images?: Array<{
    id: number;
    title: string;
    category: string;
    height: "short" | "medium" | "tall";
  }>;
}

export default function ImageMosaic({ images = [] }: ImageMosaicProps) {
  const defaultImages = [
    { id: 1, title: "Modern Living Room", category: "Residential", height: "tall" as const },
    { id: 2, title: "Luxury Kitchen", category: "Residential", height: "medium" as const },
    { id: 3, title: "Office Space", category: "Commercial", height: "short" as const },
    { id: 4, title: "Hotel Lobby", category: "Hospitality", height: "tall" as const },
    { id: 5, title: "Bedroom Design", category: "Residential", height: "medium" as const },
    { id: 6, title: "Restaurant Interior", category: "Hospitality", height: "short" as const },
    { id: 7, title: "Bathroom Spa", category: "Residential", height: "medium" as const },
    { id: 8, title: "Conference Room", category: "Commercial", height: "tall" as const },
    { id: 9, title: "Retail Store", category: "Commercial", height: "medium" as const },
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
              <div className={`relative overflow-hidden rounded-lg shadow-lg ${getHeightClass(image.height)} bg-gradient-to-br from-accent/20 to-primary/20}`}>
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground font-body">{image.title}</p>
                    <p className="text-xs text-muted-foreground font-accent">{image.category}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-heading text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="font-body text-sm">{image.category}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 bg-accent text-white px-4 py-2 rounded-lg text-sm font-body"
                    >
                      View Project
                    </motion.button>
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