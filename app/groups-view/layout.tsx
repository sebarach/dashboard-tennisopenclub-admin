import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cuadro de Grupos - Admin Torneo de Tenis",
  description: "Vista de grupos y clasificación de jugadores",
}

export default function GroupsViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
