import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partidos - Admin Torneo de Tenis",
  description: "Calendario y gestión de partidos del torneo",
}

export default function MatchesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
