"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isOpen) setIsOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/90 shadow-[0_1px_0_0_rgba(43,41,38,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-[0.18em] text-charcoal"
        >
          {siteConfig.brand}
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative pb-1 text-sm font-medium transition-colors hover:text-rose-dark ${
                  isActive ? "text-rose-dark" : "text-charcoal-soft"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute right-0 bottom-0 left-0 h-px bg-rose-dark"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark"
          >
            Book a Session
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-charcoal/10 bg-ivory lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {siteConfig.nav.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-blush/50 text-rose-dark"
                          : "text-charcoal-soft hover:text-rose-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-full bg-charcoal px-6 py-3 text-center text-sm font-medium text-ivory"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
