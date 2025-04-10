"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const rankings = [
  {
    id: "overall",
    title: "Ranking General",
    players: [
      { id: 1, name: "Carlos Alcaraz", points: 120, change: 2, group: "A" },
      { id: 2, name: "Daniil Medvedev", points: 115, change: 1, group: "B" },
      { id: 3, name: "Rafael Nadal", points: 90, change: -1, group: "A" },
      { id: 4, name: "Alexander Zverev", points: 85, change: 0, group: "B" },
      { id: 5, name: "Novak Djokovic", points: 80, change: -2, group: "A" },
      { id: 6, name: "Stefanos Tsitsipas", points: 75, change: 1, group: "B" },
      { id: 7, name: "Roger Federer", points: 60, change: 0, group: "A" },
      { id: 8, name: "Andrey Rublev", points: 55, change: 0, group: "B" },
    ],
  },
  {
    id: "group-a",
    title: "Ranking Grupo A",
    players: [
      { id: 1, name: "Carlos Alcaraz", points: 60, change: 0, group: "A" },
      { id: 3, name: "Rafael Nadal", points: 45, change: 0, group: "A" },
      { id: 5, name: "Novak Djokovic", points: 40, change: 0, group: "A" },
      { id: 7, name: "Roger Federer", points: 30, change: 0, group: "A" },
    ],
  },
  {
    id: "group-b",
    title: "Ranking Grupo B",
    players: [
      { id: 2, name: "Daniil Medvedev", points: 60, change: 0, group: "B" },
      { id: 4, name: "Alexander Zverev", points: 45, change: 0, group: "B" },
      { id: 6, name: "Stefanos Tsitsipas", points: 40, change: 0, group: "B" },
      { id: 8, name: "Andrey Rublev", points: 30, change: 0, group: "B" },
    ],
  },
]

export function RankingView() {
  const [selectedRanking, setSelectedRanking] = useState("overall")

  const currentRanking = rankings.find((r) => r.id === selectedRanking) || rankings[0]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Rankings del Torneo</CardTitle>
              <CardDescription>Clasificación de jugadores por puntos</CardDescription>
            </div>
            <Select value={selectedRanking} onValueChange={setSelectedRanking}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar ranking" />
              </SelectTrigger>
              <SelectContent>
                {rankings.map((ranking) => (
                  <SelectItem key={ranking.id} value={ranking.id}>
                    {ranking.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Pos</TableHead>
                <TableHead>Jugador</TableHead>
                <TableHead className="text-center">Grupo</TableHead>
                <TableHead className="text-center">Puntos</TableHead>
                <TableHead className="text-center">Cambio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRanking.players.map((player, index) => (
                <TableRow key={player.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{player.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline">Grupo {player.group}</Badge>
                  </TableCell>
                  <TableCell className="text-center font-bold">{player.points}</TableCell>
                  <TableCell className="text-center">
                    {player.change > 0 && <span className="text-green-600">↑{player.change}</span>}
                    {player.change < 0 && <span className="text-red-600">↓{Math.abs(player.change)}</span>}
                    {player.change === 0 && <span className="text-muted-foreground">-</span>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
