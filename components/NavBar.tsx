"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Leçons", href: "/lecons" },
    { label: "QCM", href: "/qcm" },
    { label: "Révisions", href: "/revision" },
    { label: "Tarifs", href: "/tarifs" },
  ];

  return (
    <header className="w-full border-b border-muted bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          ✈️ PPL Coach
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* BOUTON CONNEXION */}
        <div className="hidden md:block">
          <Button asChild variant="outline" size="sm">
            <Link href="/auth/choose-auth">Se connecter</Link>
          </Button>
        </div>

        {/* MENU BURGER MOBILE */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full mt-2"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/auth/choose-auth">Se connecter</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
