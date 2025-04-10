"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const groups = [
  {
    id: "A",
    players: [
      { id: 1, name: "Carlos Alcaraz", played: 2, won: 2, lost: 0, sets_won: 4, sets_lost: 0, points: 6 },
      { id: 2, name: "Rafael Nadal", played: 2, won: 1, lost: 1, sets_won: 2, sets_lost: 2, points: 3 },
      { id: 3, name: "Novak Djokovic", played: 2, won: 1, lost: 1, sets_won: 2, sets_lost: 2, points: 3 },
      { id: 4, name: "Roger Federer", played: 2, won: 0, lost: 2, sets_won: 0, sets_lost: 4, points: 0 },
    ],
  },
  {
    id: "B",
    players: [
      { id: 5, name: "Daniil Medvedev", played: 2, won: 2, lost: 0, sets_won: 4, sets_lost: 1, points: 6 },
      { id: 6, name: "Alexander Zverev", played: 2, won: 1, lost: 1, sets_won: 3, sets_lost: 2, points: 3 },
      { id: 7, name: "Stefanos Tsitsipas", played: 2, won: 1, lost: 1, sets_won: 2, sets_lost: 3, points: 3 },
      { id: 8, name: "Andrey Rublev", played: 2, won: 0, lost: 2, sets_won: 1, sets_lost: 4, points: 0 },
    ],
  },
]

export function GroupView() {
  const [selectedGroup, setSelectedGroup] = useState("A")
  const [activeTab, setActiveTab] = useState("standings")

  const currentGroup = groups.find((g) => g.id === selectedGroup) || groups[0]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Fase de Grupos</CardTitle>
              <CardDescription>Gestión de grupos y resultados</CardDescription>
            </div>
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar grupo" />
              </SelectTrigger>
              <SelectContent>
                {groups.map((group) => (
                  <SelectItem key={group.id} value={group.id}>
                    Grupo {group.id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="standings">Clasificación</TabsTrigger>
              <TabsTrigger value="matches">Partidos</TabsTrigger>
            </TabsList>
            <TabsContent value="standings">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pos</TableHead>
                    <TableHead>Jugador</TableHead>
                    <TableHead className="text-center">PJ</TableHead>
                    <TableHead className="text-center">PG</TableHead>
                    <TableHead className="text-center">PP</TableHead>
                    <TableHead className="text-center">Sets+</TableHead>
                    <TableHead className="text-center">Sets-</TableHead>
                    <TableHead className="text-center">Puntos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentGroup.players
                    .sort((a, b) => b.points - a.points || b.sets_won - b.sets_lost - (a.sets_won - a.sets_lost))
                    .map((player, index) => (
                      <TableRow key={player.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium">{player.name}</TableCell>
                        <TableCell className="text-center">{player.played}</TableCell>
                        <TableCell className="text-center">{player.won}</TableCell>
                        <TableCell className="text-center">{player.lost}</TableCell>
                        <TableCell className="text-center">{player.sets_won}</TableCell>
                        <TableCell className="text-center">{player.sets_lost}</TableCell>
                        <TableCell className="text-center font-bold">{player.points}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="matches">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Registrar Resultado</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Registrar Resultado</DialogTitle>
                        <DialogDescription>
                          Ingresa el resultado del partido entre dos jugadores del grupo.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="player1">Jugador 1</Label>
                            <Select defaultValue="1">
                              <SelectTrigger id="player1">
                                <SelectValue placeholder="Seleccionar jugador" />
                              </SelectTrigger>
                              <SelectContent>
                                {currentGroup.players.map((player) => (
                                  <SelectItem key={player.id} value={player.id.toString()}>
                                    {player.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="player2">Jugador 2</Label>
                            <Select defaultValue="2">
                              <SelectTrigger id="player2">
                                <SelectValue placeholder="Seleccionar jugador" />
                              </SelectTrigger>
                              <SelectContent>
                                {currentGroup.players.map((player) => (
                                  <SelectItem key={player.id} value={player.id.toString()}>
                                    {player.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="sets1">Sets Jugador 1</Label>
                            <Input id="sets1" type="number" min="0" max="3" defaultValue="0" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sets2">Sets Jugador 2</Label>
                            <Input id="sets2" type="number" min="0" max="3" defaultValue="0" />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Guardar Resultado</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Jugador 1</TableHead>
                      <TableHead className="text-center">Resultado</TableHead>
                      <TableHead>Jugador 2</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>10/04/2025</TableCell>
                      <TableCell>Carlos Alcaraz</TableCell>
                      <TableCell className="text-center font-medium">2-0</TableCell>
                      <TableCell>Roger Federer</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10/04/2025</TableCell>
                      <TableCell>Rafael Nadal</TableCell>
                      <TableCell className="text-center font-medium">2-0</TableCell>
                      <TableCell>Novak Djokovic</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>11/04/2025</TableCell>
                      <TableCell>Carlos Alcaraz</TableCell>
                      <TableCell className="text-center font-medium">2-0</TableCell>
                      <TableCell>Novak Djokovic</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>11/04/2025</TableCell>
                      <TableCell>Rafael Nadal</TableCell>
                      <TableCell className="text-center font-medium">0-2</TableCell>
                      <TableCell>Roger Federer</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
