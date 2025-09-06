"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '9999999999';
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
    { icon: Phone, label: "Phone", value: "9133012244, 9666612244" },
    { icon: Mail, label: "Email", value: "hello@greenwayinteriors.com" },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM" }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@greenwayinteriors.com" }
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Residential Design", href: "#" },
        { name: "Commercial Design", href: "#" },
        { name: "Space Planning", href: "#" },
        { name: "3D Visualization", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "FAQ", href: "/contact#faq" },
        { name: "Testimonials", href: "#" },
        { name: "Design Guide", href: "#" }
      ]
    }
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
              <div key={index} className="flex items-center space-x-3">
                <detail.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">{detail.label}</p>
                  <p className="font-body font-medium text-foreground">{detail.value}</p>
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
                © {new Date().getFullYear()} Greenway Interiors. All rights reserved.
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
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 w-12 h-12 bg-accent text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors z-40"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    </footer>
  );
}