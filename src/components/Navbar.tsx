"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: readonly NavChild[] };

function isItemActive(item: NavItem, pathname: string) {
  if (pathname === item.href) return true;
  return item.children?.some((child) => pathname === child.href) ?? false;
}

export function Navbar() {
  const pathname = usePathname();
  const nav = siteConfig.nav as unknown as NavItem[];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<Set<string>>(new Set());
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!openDesktop) return;
    const onClickOutside = (e: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(e.target as Node)
      ) {
        setOpenDesktop(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDesktop(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openDesktop]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isOpen) setIsOpen(false);
    if (openDesktop) setOpenDesktop(null);
  }

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 150);
  };

  const toggleMobile = (label: string) => {
    setOpenMobile((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  // Next.js doesn't scroll to a hash when only the hash changes on the
  // same route (client-side Link nav), so handle that case manually.
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const [path, hash] = href.split("#");
    if (!hash || path !== pathname) return;
    const target = document.getElementById(hash);
    if (!target) return;
    e.preventDefault();
    history.pushState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

        <div
          ref={desktopNavRef}
          className="hidden items-center gap-6 xl:flex"
        >
          {nav.map((item) => {
            const isActive = isItemActive(item, pathname);
            const hasChildren = !!item.children?.length;
            const isMenuOpen = openDesktop === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={hasChildren ? () => handleEnter(item.label) : undefined}
                onMouseLeave={hasChildren ? handleLeave : undefined}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-haspopup={hasChildren ? "true" : undefined}
                  aria-expanded={hasChildren ? isMenuOpen : undefined}
                  onClick={(e) => {
                    if (hasChildren && !isMenuOpen) {
                      e.preventDefault();
                      setOpenDesktop(item.label);
                    }
                  }}
                  className={`relative flex items-center gap-1 pb-1 text-sm font-medium whitespace-nowrap transition-colors hover:text-rose-dark ${
                    isActive ? "text-rose-dark" : "text-charcoal-soft"
                  }`}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute right-0 bottom-0 left-0 h-px bg-rose-dark"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>

                {hasChildren && (
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full z-50 mt-2 min-w-[240px] rounded-2xl border border-charcoal/8 bg-ivory/95 p-2 shadow-[0_25px_45px_-25px_rgba(43,41,38,0.35)] backdrop-blur-md"
                      >
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={(e) => {
                              handleAnchorClick(e, child.href);
                              setOpenDesktop(null);
                            }}
                            className="block rounded-xl px-4 py-2.5 text-sm whitespace-nowrap text-charcoal-soft transition-colors hover:bg-blush/50 hover:text-rose-dark"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-medium whitespace-nowrap text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark"
          >
            Book now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal xl:hidden"
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
            className="overflow-hidden border-t border-charcoal/10 bg-ivory xl:hidden"
          >
            <div className="flex max-h-[calc(100vh-72px)] flex-col gap-1 overflow-y-auto px-6 py-6">
              {nav.map((item, i) => {
                const isActive = isItemActive(item, pathname);
                const hasChildren = !!item.children?.length;
                const expanded = openMobile.has(item.label);

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`block flex-1 rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-blush/50 text-rose-dark"
                            : "text-charcoal-soft hover:text-rose-dark"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => toggleMobile(item.label)}
                          aria-expanded={expanded}
                          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center text-charcoal-soft"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={(e) => {
                                  handleAnchorClick(e, child.href);
                                  setIsOpen(false);
                                }}
                                className="block rounded-lg px-3 py-2.5 text-sm text-charcoal-soft/90 transition-colors hover:text-rose-dark"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-full bg-charcoal px-6 py-3 text-center text-sm font-medium text-ivory"
              >
                Book now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
