"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { register } from "@/lib/serviceWorker";

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

export default function SplashScreenWrapper({ children }: SplashScreenWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    
    // Register service worker
    register();
  }, []);

  // Only show splash screen on client side
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <>
      {showSplash && <SplashScreen onLoadingComplete={() => setShowSplash(false)} />}
      {!showSplash && children}
    </>
  );
}