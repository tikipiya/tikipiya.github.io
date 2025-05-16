"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaThLarge } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/about", label: "About", icon: <FaUser /> },
  { href: "/works", label: "Works", icon: <FaThLarge /> },
];

export function Navigation() {
  const pathname = usePathname();
  const activeIndex = navItems.findIndex((item) => item.href === pathname);

  return (
    <nav className="flex justify-center mt-6">
      <div className="relative flex bg-black/40 rounded-2xl shadow-lg px-4 py-2 gap-2">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-colors duration-200 ${
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              style={{ zIndex: 1 }}
            >
              {item.icon}
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-white/10 rounded-xl z-[-1]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 