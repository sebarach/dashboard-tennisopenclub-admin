"use client"

import { Progress } from "@/components/ui/progress"

export function TournamentProgress() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Fase de Grupos</div>
          <div className="text-sm text-muted-foreground">75% completado</div>
        </div>
        <Progress value={75} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Octavos de Final</div>
          <div className="text-sm text-muted-foreground">0% completado</div>
        </div>
        <Progress value={0} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Cuartos de Final</div>
          <div className="text-sm text-muted-foreground">0% completado</div>
        </div>
        <Progress value={0} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Semifinales</div>
          <div className="text-sm text-muted-foreground">0% completado</div>
        </div>
        <Progress value={0} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Final</div>
          <div className="text-sm text-muted-foreground">0% completado</div>
        </div>
        <Progress value={0} className="h-2" />
      </div>
    </div>
  )
}
