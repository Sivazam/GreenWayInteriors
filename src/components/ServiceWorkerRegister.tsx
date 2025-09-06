"use client";

import { useEffect } from "react";
import { register } from "@/lib/serviceWorker";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    register();
  }, []);

  return null;
}