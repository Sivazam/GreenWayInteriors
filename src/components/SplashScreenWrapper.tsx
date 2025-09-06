"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { register } from "@/lib/serviceWorker";

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

export default function SplashScreenWrapper({ children }: SplashScreenWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Register service worker
    register();
  }, []);

  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <>
      {showSplash && <SplashScreen onLoadingComplete={() => setShowSplash(false)} />}
      {!showSplash && children}
    </>
  );
}