"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const routes = [
  { href: "/", label: "Home", n: "01" },
  { href: "/about", label: "About", n: "02" },
  { href: "/experience", label: "Experience", n: "03" },
  { href: "/projects", label: "Projects", n: "04" },
  { href: "/resume", label: "Resume", n: "05" },
  { href: "/contact", label: "Contact", n: "06" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ground/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[76rem] items-center justify-between gap-4 border-x border-transparent px-5 sm:h-16 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-[13px] font-semibold tracking-tight text-ink"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-accent text-[11px] font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">
            vedant<span className="text-accent">.somani</span>
          </span>
        </Link>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          {routes.map((r) => {
            const active = isActive(pathname, r.href);
            return (
              <Link
                key={r.href}
                href={r.href}
                aria-current={active ? "page" : undefined}
                className={`group relative px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                <span className="mr-1.5 font-mono text-[10px] text-faint">
                  {r.n}
                </span>
                {r.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          <div className="ml-3 border-l border-line pl-3">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>

    {/* mobile full-height menu: rendered as a header sibling, since the
        header's backdrop-blur creates a containing block for fixed
        descendants and would otherwise collapse this panel's height */}
    {open && (
      <div className="fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto border-t border-line bg-ground sm:top-16 md:hidden">
        <nav className="mx-auto max-w-[76rem]" aria-label="Mobile">
          {routes.map((r) => {
            const active = isActive(pathname, r.href);
            return (
              <Link
                key={r.href}
                href={r.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-baseline gap-4 border-b border-line px-5 py-5 sm:px-8 ${
                  active ? "text-accent" : "text-ink"
                }`}
              >
                <span className="font-mono text-xs text-faint">{r.n}</span>
                <span className="font-display text-2xl font-semibold tracking-tight">
                  {r.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="px-5 py-6 sm:px-8">
          <a
            href={`mailto:${profile.email}`}
            className="mono-label hover:text-accent"
          >
            {profile.email}
          </a>
        </div>
      </div>
    )}
    </>
  );
}
