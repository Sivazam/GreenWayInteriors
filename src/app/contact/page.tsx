"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studios",
      details: [
        "Sathupalli Branch:",
        "Vemsuri Road, Srinidhi Hospital Beside",
        "Sathupalli - 507101",
        "Phone: 9133012244, 9666612244",
        "",
        "Tadepalligudem Branch:",
        "Reddy Eye Hospital Backside",
        "Green Commercial Complex, Tadepalligudem"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Sathupalli: 9133012244, 9666612244",
        "Tadepalligudem: [Phone Number]",
        "Mon-Fri: 9:00 AM - 6:00 PM",
        "Sat: 10:00 AM - 4:00 PM"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@greenwayinteriors.com",
        "info@greenwayinteriors.com",
        "We respond within 24 hours"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Pinterest", icon: "📌", url: "#" }
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

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg shadow-lg border border-border p-6 text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="font-body text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
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

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Find Our Studio</h2>
              
              <div className="bg-card rounded-lg shadow-lg border border-border overflow-hidden h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="font-body text-lg text-muted-foreground mb-2">
                    Interactive Map
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Google Maps integration would be displayed here
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-heading text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-2xl hover:bg-accent hover:text-primary-foreground transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
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
                className="bg-card rounded-lg shadow-lg border border-border p-6"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="font-body text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}