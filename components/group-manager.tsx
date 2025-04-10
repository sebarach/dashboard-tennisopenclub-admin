"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GroupView } from "@/components/group-view"
import { GroupSettings } from "@/components/group-settings"

export function GroupManager() {
  const [activeTab, setActiveTab] = useState("view")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Fase de Grupos</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Exportar</Button>
          <Button>Generar Grupos</Button>
        </div>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="view">Ver Grupos</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>
        <TabsContent value="view" className="space-y-4">
          <GroupView />
        </TabsContent>
        <TabsContent value="settings" className="space-y-4">
          <GroupSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
