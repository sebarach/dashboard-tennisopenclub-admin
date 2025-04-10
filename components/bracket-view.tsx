"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BracketView() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Bracket de Eliminación</CardTitle>
              <CardDescription>Vista del bracket del torneo</CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar fase" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las fases</SelectItem>
                <SelectItem value="r16">Octavos de Final</SelectItem>
                <SelectItem value="qf">Cuartos de Final</SelectItem>
                <SelectItem value="sf">Semifinales</SelectItem>
                <SelectItem value="f">Final</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex overflow-auto pb-4">
            <div className="flex gap-4">
              {/* Octavos de Final */}
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium text-center mb-2">Octavos de Final</div>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-48">
                    <div className="border rounded-md p-2 bg-background">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Jugador {i * 2 + 1}</span>
                        <span className="text-sm">-</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Jugador {i * 2 + 2}</span>
                        <span className="text-sm">-</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cuartos de Final */}
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium text-center mb-2">Cuartos de Final</div>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-48 mt-8">
                    <div className="border rounded-md p-2 bg-background">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Por definir</span>
                        <span className="text-sm">-</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Por definir</span>
                        <span className="text-sm">-</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Semifinales */}
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium text-center mb-2">Semifinales</div>
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="w-48 mt-24">
                    <div className="border rounded-md p-2 bg-background">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Por definir</span>
                        <span className="text-sm">-</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Por definir</span>
                        <span className="text-sm">-</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final */}
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium text-center mb-2">Final</div>
                <div className="w-48 mt-56">
                  <div className="border rounded-md p-2 bg-background">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Por definir</span>
                      <span className="text-sm">-</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Por definir</span>
                      <span className="text-sm">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
