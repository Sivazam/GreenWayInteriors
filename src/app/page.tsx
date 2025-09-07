// "use client";

// import { useEffect, useState } from "react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import ImageMosaic from "@/components/ImageMosaic";
// import Testimonials from "@/components/Testimonials";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function Home() {
//   const [currentPath, setCurrentPath] = useState("/");
//   const [isMounted, setIsMounted] = useState(false);
//   const [isOverHero, setIsOverHero] = useState(true);

//   useEffect(() => {
//     setIsMounted(true);
//     setCurrentPath(window.location.pathname);
    
//     const handleScroll = () => {
//       const heroSection = document.querySelector("section[class*='h-screen']");
//       if (heroSection) {
//         const heroBottom = heroSection.getBoundingClientRect().bottom;
//         setIsOverHero(heroBottom > 0);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation currentPath={isMounted ? currentPath : "/"} isOverHero={isOverHero} />
      
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Video - Commented out temporarily for testing */}
//         {/* <div className="absolute inset-0 z-0">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//             style={{
//               objectFit: 'cover',
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//             }}
//           >
//             <source src="/interior-video.webm" type="video/webm" />
//             <img
//               src="/interior-fallback.jpg"
//               alt="Interior design background"
//               className="w-full h-full object-cover"
//             />
//           </video>
//         </div> */}

//         {/* Fallback Background */}
//         <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/20 to-primary/20" />

//         {/* Black Overlay */}
//         <div className="absolute inset-0 bg-black/55 z-10" />

//         {/* Hero Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="max-w-2xl"
//           >
//             <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               Transform Your Space with
//               <br />
//               <span className="text-accent">Greenway Interiors</span>
//             </h1>
            
//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//               className="font-body text-lg text-white md:text-xl text-muted-foreground mb-8 leading-relaxed"
//             >
//               Discover the perfect blend of aesthetics and functionality with our premium interior design services. We create spaces that inspire, comfort, and reflect your unique personality across our Sathupalli and Tadepalligudem locations.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-accent text-white px-8 py-4 rounded-lg font-body font-medium text-lg flex items-center justify-center space-x-2 hover:bg-accent/90 transition-colors"
//               >
//                 <span>Start Your Journey</span>
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-body font-medium text-lg hover:bg-accent hover:text-white transition-colors"
//               >
//                 View Our Portfolio
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
//           >
//             <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Image Mosaic Section */}
//       <ImageMosaic />

//       {/* Testimonials Section */}
//       <Testimonials />

//       {/* Call to Action Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
//               Ready to Transform Your Space?
//             </h2>
//             <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
//               Let's collaborate to create the interior of your dreams. Our team is ready to bring your vision to life with exceptional design and craftsmanship.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-card text-accent px-8 py-4 rounded-lg font-body font-medium text-lg hover:bg-muted transition-colors"
//             >
//               Get Started Today 
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
      
//       <Footer />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageMosaic from "@/components/ImageMosaic";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [currentPath, setCurrentPath] = useState("/");
  const [isMounted, setIsMounted] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setCurrentPath(window.location.pathname);
    
    const handleScroll = () => {
      const heroSection = document.querySelector("section[class*='h-screen']");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsOverHero(heroBottom > 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPath={isMounted ? currentPath : "/"} isOverHero={isOverHero} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video - Commented out temporarily for testing */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <source src="/interior-video.webm" type="video/webm" />
            <img
              src="/interior-fallback.jpg"
              alt="Interior design background"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        {/* Fallback Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/20 to-primary/20" />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Space with
              <br />
              <span className="text-accent">Greenway Interiors</span>
            </h1>
            
            {/* <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="font-body text-lg text-white md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Discover the perfect blend of aesthetics and functionality with our premium interior design services. We create spaces that inspire, comfort, and reflect your unique personality across our Sathupalli and Tadepalligudem locations.
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-white px-8 py-4 rounded-lg font-body font-medium text-lg flex items-center justify-center space-x-2 hover:bg-accent/90 transition-colors w-full sm:w-auto"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-body font-medium text-lg hover:bg-accent hover:text-white transition-colors w-full sm:w-auto"
                >
                  View Our Portfolio
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Image Mosaic Section */}
      <ImageMosaic />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create the interior of your dreams. Our team is ready to bring your vision to life with exceptional design and craftsmanship.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card text-accent px-8 py-4 rounded-lg font-body font-medium text-lg hover:bg-muted transition-colors"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}