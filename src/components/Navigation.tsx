"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Info, FolderOpen, Mail } from "lucide-react";

interface NavigationProps {
  currentPath?: string;
  isOverHero?: boolean;
}

export default function Navigation({ currentPath = "/", isOverHero = false }: NavigationProps) {
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/projects", label: "Projects", icon: FolderOpen },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              aria-label="Greenway Interiors home"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-accent rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-primary-foreground font-serif font-bold text-lg">G</span>
              </motion.div>
              <span className={`font-serif text-xl font-bold ${isOverHero ? "text-white" : "text-foreground"}`}>Greenway Interiors</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-body text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 ${
                    isActive(item.href) ? "text-accent" : isOverHero ? "text-white" : "text-foreground"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation - Logo Only */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Mobile top navigation">
        <div className="flex items-center justify-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
            aria-label="Greenway Interiors home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-accent rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-primary-foreground font-serif font-bold text-lg">G</span>
            </motion.div>
            <span className="font-serif text-xl font-bold text-foreground">Greenway Interiors</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border" 
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-lg ${
                isActive(item.href) ? "text-accent" : "text-muted-foreground"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mb-1"
                aria-hidden="true"
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              <span className="text-xs font-body">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}