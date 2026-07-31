"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

import { navigationItems } from "@/config/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerReference = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      triggerReference.current?.focus();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeNavigation() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        ref={triggerReference}
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? "Fermer le menu de navigation"
            : "Ouvrir le menu de navigation"
        }
        className="inline-flex size-9 items-center justify-center border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        onClick={() => {
          setIsOpen((currentValue) => !currentValue);
        }}
      >
        {isOpen ? (
          <XIcon aria-hidden="true" className="size-4" />
        ) : (
          <ListIcon aria-hidden="true" className="size-4" />
        )}
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-lg"
        >
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:px-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border border-transparent px-3 py-3 text-sm font-medium text-foreground transition-colors hover:border-border hover:bg-muted focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                  onClick={closeNavigation}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
