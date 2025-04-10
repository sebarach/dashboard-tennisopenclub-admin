"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RankingView } from "@/components/ranking-view"
import { RankingSettings } from "@/components/ranking-settings"

export function RankingManager() {
  const [activeTab, setActiveTab] = useState("view")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Rankings</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Exportar</Button>
          <Button>Actualizar Rankings</Button>
        </div>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="view">Ver Rankings</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>
        <TabsContent value="view" className="space-y-4">
          <RankingView />
        </TabsContent>
        <TabsContent value="settings" className="space-y-4">
          <RankingSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
