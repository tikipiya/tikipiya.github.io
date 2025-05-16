'use client';
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseGlow() {
  // 画面サイズに応じてエフェクトサイズを決定
  const [size, setSize] = useState(300);
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      setSize(Math.max(180, Math.min(400, w * 0.3)));
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // motion valueで滑らかに追従
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, size]);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        width: size,
        height: size,
        pointerEvents: "none",
      }}
      className="fixed z-0 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 opacity-30 blur-3xl transition-all duration-200"
    />
  );
} 