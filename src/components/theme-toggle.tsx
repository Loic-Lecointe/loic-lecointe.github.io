"use client";

import { LaptopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            aria-label="Choisir le thème d’affichage"
            className="relative"
            size="icon"
            variant="outline"
          />
        }
      >
        <SunIcon
          aria-hidden="true"
          className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />

        <MoonIcon
          aria-hidden="true"
          className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon aria-hidden="true" />
          Clair
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon aria-hidden="true" />
          Sombre
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          <LaptopIcon aria-hidden="true" />
          Système
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
