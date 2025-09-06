"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

export default function SplashScreenWrapper({ children }: SplashScreenWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsMounted(true);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Always show splash screen first on client side
  if (!isMounted) {
    return <SplashScreen onLoadingComplete={() => {}} />;
  }

  return (
    <>
      {showSplash && <SplashScreen onLoadingComplete={() => setShowSplash(false)} />}
      {!showSplash && children}
    </>
  );
}