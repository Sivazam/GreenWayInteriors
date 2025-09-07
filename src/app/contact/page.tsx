// "use client";

// import { useEffect, useState } from "react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock, Send, Building2, Users, Star, Award } from "lucide-react";

// export default function Contact() {
//   const [currentPath, setCurrentPath] = useState("/contact");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: ""
//   });

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: ""
//     });
//   };

//   const contactCards = [
//     {
//       icon: Building2,
//       title: "Two Locations",
//       subtitle: "Serving You Better",
//       description: "Conveniently located in Sathupalli and Tadepalligudem to serve your interior design needs",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: Users,
//       title: "Expert Team",
//       subtitle: "Professional Designers",
//       description: "Experienced interior designers dedicated to bringing your vision to life",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: Star,
//       title: "Quality Service",
//       subtitle: "Premium Solutions",
//       description: "High-quality materials and craftsmanship for lasting results",
//       color: "from-amber-500 to-orange-500"
//     },
//     {
//       icon: Award,
//       title: "Satisfaction Guaranteed",
//       subtitle: "Client-Focused Approach",
//       description: "We work closely with you to ensure your complete satisfaction",
//       color: "from-green-500 to-emerald-500"
//     }
//   ];

//   const branchInfo = [
//     {
//       title: "Sathupalli Branch",
//       address: "Vemsuri Road, Srinidhi Hospital Beside, Sathupalli",
//       phone: "9133012244, 9666612244",
//       mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1234567890123!2d80.12345678901234!3d17.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzI0LjAiTiA4MMKwMDcnMjUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//     },
//     {
//       title: "Tadepalligudem Branch", 
//       address: "Reddy Eye Hospital Backside, Green Commercial Complex, Tadepalligudem",
//       phone: "9133012244, 9666612244",
//       mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1234567890123!2d81.12345678901234!3d16.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA3JzI0LjAiTiA4McKwMDcnMjUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//     }
//   ];

//   const socialLinks = [
//     { name: "Instagram", icon: "📷", url: "#" },
//     { name: "Facebook", icon: "📘", url: "#" },
//     { name: "LinkedIn", icon: "💼", url: "#" },
//     { name: "Pinterest", icon: "📌", url: "#" }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation currentPath={currentPath} />
      
//       {/* Hero Section */}
//       <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-accent/10 to-primary/10">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
//               Get in <span className="text-accent">Touch</span>
//             </h1>
//             <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
//               Ready to transform your space? We'd love to hear about your project. 
//               Reach out to schedule a consultation at our Sathupalli or Tadepalligudem locations, 
//               or learn more about our services.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Redesigned Contact Cards */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="relative group overflow-hidden rounded-xl shadow-lg"
//               >
//                 {/* Gradient Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
                
//                 {/* Content */}
//                 <div className="relative z-10 p-6 text-white h-full flex flex-col">
//                   <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <card.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="font-heading text-2xl font-bold mb-1">{card.title}</h3>
//                   <p className="font-body text-lg text-white/90 mb-3">{card.subtitle}</p>
//                   <p className="font-body text-sm text-white/80 leading-relaxed flex-grow">
//                     {card.description}
//                   </p>
//                   <div className="mt-4">
//                     <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-16 transition-all duration-300" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Branch Locations with Maps */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
//               Visit Our <span className="text-accent">Studios</span>
//             </h2>
//             <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
//               Experience our design expertise firsthand at our conveniently located studios in Sathupalli and Tadepalligudem
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {branchInfo.map((branch, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="bg-card rounded-xl shadow-lg border border-border overflow-hidden"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <MapPin className="w-6 h-6 text-accent" />
//                     <h3 className="font-heading text-2xl font-bold">{branch.title}</h3>
//                   </div>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-start space-x-3">
//                       <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
//                       <p className="font-body text-muted-foreground">{branch.address}</p>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
//                       <p className="font-body text-muted-foreground">{branch.phone}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="h-64 bg-muted">
//                   <iframe
//                     src={branch.mapUrl}
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title={`Map location for ${branch.title}`}
//                     className="w-full h-full"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-16 px-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
//               Send Us a <span className="text-accent">Message</span>
//             </h2>
//             <p className="font-body text-lg text-muted-foreground">
//               Have questions about our services? Ready to start your project? Get in touch with us today!
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="bg-card rounded-xl shadow-lg border border-border p-8"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="John Doe"
//                     className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Your Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="john@example.com"
//                     className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="+91 98765 43210"
//                     className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     placeholder="Interior Design Consultation"
//                     className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Your Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell us about your project, vision, and requirements..."
//                   rows={6}
//                   className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
//                   required
//                 />
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full bg-accent text-primary-foreground py-4 rounded-lg font-body font-medium text-lg hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
//               >
//                 <Send className="w-5 h-5" />
//                 <span>Send Message</span>
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
//               Frequently Asked <span className="text-accent">Questions</span>
//             </h2>
//             <p className="font-body text-lg text-muted-foreground">
//               Find answers to common questions about our services and process
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {[
//               {
//                 question: "How long does a typical interior design project take?",
//                 answer: "Project timelines vary depending on the scope and complexity. A residential project typically takes 2-4 months from concept to completion, while commercial projects may take 4-8 months."
//               },
//               {
//                 question: "What is your design process?",
//                 answer: "Our process includes: Discovery consultation, concept development, detailed design planning, material selection, 3D visualization, and project implementation with regular updates throughout."
//               },
//               {
//                 question: "Do you work with clients outside your local area?",
//                 answer: "Yes! We offer virtual design services for clients nationwide and can travel for on-site consultations for international projects."
//               },
//               {
//                 question: "What is your pricing structure?",
//                 answer: "We offer flexible pricing models including fixed project fees, hourly rates, and retainer-based services. We'll provide a detailed quote after understanding your specific needs."
//               }
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 className="bg-card rounded-lg shadow-lg border border-border p-6"
//               >
//                 <h3 className="font-heading text-lg font-semibold mb-2">{faq.question}</h3>
//                 <p className="font-body text-muted-foreground">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Building2, Users, Star, Award, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const [currentPath, setCurrentPath] = useState("/contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactCards = [
    {
      icon: Building2,
      title: "Two Locations",
      subtitle: "Serving You Better",
      description: "Conveniently located in Sathupalli and Tadepalligudem to serve your interior design needs"
    },
    {
      icon: Users,
      title: "Expert Team",
      subtitle: "Professional Designers",
      description: "Experienced interior designers dedicated to bringing your vision to life"
    },
    {
      icon: Star,
      title: "Quality Service",
      subtitle: "Premium Solutions",
      description: "High-quality materials and craftsmanship for lasting results"
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      subtitle: "Client-Focused Approach",
      description: "We work closely with you to ensure your complete satisfaction"
    }
  ];

  const branchInfo = [
    {
      title: "Sathupalli Branch",
      address: "Vemsuri Road, Srinidhi Hospital Beside, Sathupalli",
      phone: "9133012244, 9666612244",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1234567890123!2d80.12345678901234!3d17.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzI0LjAiTiA4MMKwMDcnMjUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
    },
    {
      title: "Tadepalligudem Branch", 
      address: "Reddy Eye Hospital Backside, Green Commercial Complex, Tadepalligudem",
      phone: "9133012244, 9666612244",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1234567890123!2d81.12345678901234!3d16.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA3JzI0LjAiTiA4McKwMDcnMjUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-700" },
    { name: "Email", icon: Mail, url: "mailto:info@greenwayinteriors.com", color: "hover:text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPath={currentPath} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your space? We'd love to hear about your project. 
              Reach out to schedule a consultation at our Sathupalli or Tadepalligudem locations, 
              or learn more about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards with Consistent Styling */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg shadow-lg border border-border p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <card.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{card.title}</h3>
                <p className="font-body text-lg text-accent mb-3">{card.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Follow Us on <span className="text-accent">Social Media</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Stay updated with our latest projects, design tips, and inspiration
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-16 h-16 bg-card border border-border rounded-xl shadow-lg flex items-center justify-center text-muted-foreground hover:shadow-xl transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branch Locations with Maps */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="text-accent">Studios</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience our design expertise firsthand at our conveniently located studios in Sathupalli and Tadepalligudem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {branchInfo.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                    <h3 className="font-heading text-2xl font-bold">{branch.title}</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="font-body text-muted-foreground">{branch.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <p className="font-body text-muted-foreground">{branch.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 bg-muted">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map location for ${branch.title}`}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Send Us a <span className="text-accent">Message</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Have questions about our services? Ready to start your project? Get in touch with us today!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-xl shadow-lg border border-border p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Interior Design Consultation"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, vision, and requirements..."
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent text-primary-foreground py-4 rounded-lg font-body font-medium text-lg hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Find answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical interior design project take?",
                answer: "Project timelines vary depending on the scope and complexity. A residential project typically takes 2-4 months from concept to completion, while commercial projects may take 4-8 months."
              },
              {
                question: "What is your design process?",
                answer: "Our process includes: Discovery consultation, concept development, detailed design planning, material selection, 3D visualization, and project implementation with regular updates throughout."
              },
              {
                question: "Do you work with clients outside your local area?",
                answer: "Yes! We offer virtual design services for clients nationwide and can travel for on-site consultations for international projects."
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer flexible pricing models including fixed project fees, hourly rates, and retainer-based services. We'll provide a detailed quote after understanding your specific needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card rounded-lg shadow-lg border border-border p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="font-body text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}