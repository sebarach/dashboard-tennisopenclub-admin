"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Award, BarChart3, Home, Menu, TurtleIcon as TennisBall, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Partidos",
    href: "/matches",
    icon: TennisBall,
  },
  {
    title: "Brackets",
    href: "/brackets",
    icon: Trophy,
  },
  {
    title: "Grupos",
    href: "/groups",
    icon: Users,
  },
  {
    title: "Cuadro de Grupos",
    href: "/groups-view",
    icon: BarChart3,
  },
  {
    title: "Rankings",
    href: "/rankings",
    icon: Award,
  },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex items-center gap-2">
          <TennisBall className="h-6 w-6" />
          <span className="font-bold">Admin Torneo de Tenis</span>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-64 sm:max-w-none">
            <div className="flex items-center gap-2 pb-4">
              <TennisBall className="h-6 w-6" />
              <span className="font-bold">Admin Torneo de Tenis</span>
            </div>
            <nav className="grid gap-2 text-lg font-medium">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent",
                    pathname === item.href ? "bg-accent" : "transparent",
                  )}
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            Configuración
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4 text-sm">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent",
                  pathname === item.href ? "bg-accent" : "transparent",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
