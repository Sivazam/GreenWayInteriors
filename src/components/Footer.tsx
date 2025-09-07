"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowUp, MessageCircle } from "lucide-react";

interface ContactDetail {
  icon: any;
  label: string;
  value?: string;
  numbers?: Array<{
    value: string;
    display: string;
  }>;
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when user scrolls halfway down the page
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition > (documentHeight - windowHeight) / 2) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '9133012244';
    const message = 'Hi Greenway Interiors !!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Sathupalli Branch",
      details: [
        "Vemsuri Road, Srinidhi Hospital Beside",
        "Sathupalli"
      ]
    },
    {
      icon: MapPin,
      title: "Tadepalligudem Branch", 
      details: [
        "Reddy Eye Hospital Backside",
        "Green Commercial Complex, Tadepalligudem"
      ]
    }
  ];

  const contactDetails = [
    { 
      icon: Phone, 
      label: "Phone", 
      numbers: [
        { value: "9133012244", display: "9133012244" },
        { value: "9666612244", display: "9666612244" }
      ]
    },
    { icon: Mail, label: "Email", value: "info@greenwayinteriors.com" },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM" }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:info@greenwayinteriors.com" }
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Residential Design", href: "/projects" },
        { name: "Commercial Design", href: "/projects" },
        { name: "Space Planning", href: "/projects" },
        { name: "3D Visualization", href: "/projects" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ]
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { name: "Blog", href: "#" },
    //     { name: "FAQ", href: "/contact#faq" },
    //     { name: "Testimonials", href: "#" },
    //     { name: "Design Guide", href: "#" }
    //   ]
    // }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">G</span>
              </div>
              <span className="font-serif text-2xl font-bold text-foreground">Greenway Interiors</span>
            </div>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Transform your space with our premium interior design services. We create beautiful, functional living spaces that reflect your unique style and personality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Branch Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-semibold mb-6">Our Locations</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-body font-medium text-foreground mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-body text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="font-body text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start space-x-3">
                <detail.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">{detail.label}</p>
                  {detail.label === "Phone" ? (
                    <div className="space-y-1">
                      {detail.numbers?.map((phone, phoneIndex) => (
                        <motion.a
                          key={phoneIndex}
                          href={`tel:+91${phone.value}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="font-body font-medium text-foreground hover:text-accent transition-colors block cursor-pointer"
                        >
                          {phone.display}
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    <p className="font-body font-medium text-foreground">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="font-body text-sm text-muted-foreground">
                © {new Date().getFullYear()} Greenway Interiors. Built by Harte Labs.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 left-8 w-12 h-12 bg-accent text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors z-40"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-8 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors z-40"
        aria-label="Contact us on WhatsApp"
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.85 11.85 0 0012 0a11.85 11.85 0 00-8.52 3.48A11.85 11.85 0 000 12c0 2.1.55 4.16 1.6 5.95L0 24l6.3-1.64A11.89 11.89 0 0012 24a11.85 11.85 0 008.52-3.48A11.85 11.85 0 0024 12c0-3.18-1.24-6.16-3.48-8.52zM12 21.4c-1.82 0-3.59-.48-5.15-1.38l-.37-.21-3.74.98 1-3.64-.24-.37A9.42 9.42 0 012.6 12c0-5.2 4.2-9.4 9.4-9.4s9.4 4.2 9.4 9.4-4.2 9.4-9.4 9.4zm5.42-7.12c-.3-.15-1.78-.88-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.18.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.8-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.12 4.52.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.45.25-.73.25-1.35.17-1.47-.07-.12-.27-.2-.57-.35z" />
          </svg>
      </motion.button>
    </footer>
  );
}