"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/data/profile";

const LINKS = [
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/devblog", label: "DevBlog" },
  { href: "/feed", label: "Feed" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          {profile.name?.trim()?.[0] || "?"}
        </Link>

        <nav className="nav-links">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="container" style={{ paddingBottom: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
