"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Tipo para los partidos
interface Match {
  id: number
  group: number
  player1: string
  player2: string
  result?: string
  week: number
  hasResult: boolean
}

// Datos de ejemplo para los partidos
const matchesData: Match[] = [
  // Semana 1
  { id: 1, group: 1, player1: "Claudio Acuña", player2: "Felipe Varas", week: 1, hasResult: false },
  {
    id: 2,
    group: 1,
    player1: "Jose Galaz",
    player2: "Matías Pérez Molina",
    result: "6-3/6-1",
    week: 1,
    hasResult: true,
  },
  { id: 3, group: 2, player1: "César Godoy", player2: "Wanderley Durán", week: 1, hasResult: false },
  {
    id: 4,
    group: 2,
    player1: "Matías Pizarro",
    player2: "Jorge Marambio",
    result: "7-6/6-1",
    week: 1,
    hasResult: true,
  },
  { id: 5, group: 3, player1: "Roberto Medina", player2: "Daniel Vera", week: 1, hasResult: false },
  { id: 6, group: 3, player1: "Sebastian Sepulveda", player2: "Sergio Mendoza", week: 1, hasResult: false },
  { id: 7, group: 4, player1: "Pablo Rodríguez", player2: "Nelson Molina", week: 1, hasResult: false },
  { id: 8, group: 4, player1: "Danilo Milla", player2: "Julio Peña", week: 1, hasResult: false },
  { id: 9, group: 5, player1: "Fernando García", player2: "Néstor Riquelme Jara", week: 1, hasResult: false },
  { id: 10, group: 5, player1: "Ignacio Cid", player2: "Jonathan Valle", result: "6-0/6-0", week: 1, hasResult: true },

  // Semana 2
  { id: 11, group: 1, player1: "Jose Galaz", player2: "Javier Petric", week: 2, hasResult: false },
  { id: 12, group: 1, player1: "Matías Pérez Molina", player2: "Claudio Acuña", week: 2, hasResult: false },
  { id: 13, group: 2, player1: "Jorge Marambio", player2: "César Godoy", week: 2, hasResult: false },
  {
    id: 14,
    group: 2,
    player1: "Marcos Salazar",
    player2: "Matías Pizarro",
    result: "6-1/6-3",
    week: 2,
    hasResult: true,
  },
  { id: 15, group: 3, player1: "Roberto Medina", player2: "Sergio Mendoza", week: 2, hasResult: false },
  { id: 16, group: 3, player1: "Marco Castillo", player2: "Daniel Vera", week: 2, hasResult: false },
  { id: 17, group: 4, player1: "Pablo Rodríguez", player2: "Julio Peña", week: 2, hasResult: false },
  { id: 18, group: 4, player1: "Nelson Loyola", player2: "Nelson Molina", week: 2, hasResult: false },
  { id: 19, group: 5, player1: "Ignacio Cid", player2: "Cristhian Vidal", week: 2, hasResult: false },
  { id: 20, group: 5, player1: "Jonathan Valle", player2: "Néstor Riquelme Jara", week: 2, hasResult: false },
]

export function MatchCalendar() {
  const [matches, setMatches] = useState<Match[]>(matchesData)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentMatch, setCurrentMatch] = useState<Match | null>(null)
  const [set1Player1, setSet1Player1] = useState("")
  const [set1Player2, setSet1Player2] = useState("")
  const [set2Player1, setSet2Player1] = useState("")
  const [set2Player2, setSet2Player2] = useState("")
  const [set3Player1, setSet3Player1] = useState("")
  const [set3Player2, setSet3Player2] = useState("")

  // Agrupar partidos por semana
  const weeks = Array.from(new Set(matches.map((match) => match.week))).sort((a, b) => a - b)

  // Función para abrir el diálogo de agregar resultado
  const openAddResultDialog = (match: Match) => {
    setCurrentMatch(match)

    // Si ya tiene resultado, pre-cargar los valores
    if (match.result) {
      const sets = match.result.split("/")
      if (sets.length >= 1) {
        const set1 = sets[0].split("-")
        setSet1Player1(set1[0])
        setSet1Player2(set1[1])
      }
      if (sets.length >= 2) {
        const set2 = sets[1].split("-")
        setSet2Player1(set2[0])
        setSet2Player2(set2[1])
      }
      if (sets.length >= 3) {
        const set3 = sets[2].split("-")
        setSet3Player1(set3[0])
        setSet3Player2(set3[1])
      }
    } else {
      // Limpiar los valores
      setSet1Player1("")
      setSet1Player2("")
      setSet2Player1("")
      setSet2Player2("")
      setSet3Player1("")
      setSet3Player2("")
    }

    setIsDialogOpen(true)
  }

  // Función para guardar el resultado
  const saveResult = () => {
    if (!currentMatch) return

    // Construir el string de resultado
    let result = `${set1Player1}-${set1Player2}`
    if (set2Player1 && set2Player2) {
      result += `/${set2Player1}-${set2Player2}`
    }
    if (set3Player1 && set3Player2) {
      result += `/${set3Player1}-${set3Player2}`
    }

    // Actualizar el partido
    const updatedMatches = matches.map((match) =>
      match.id === currentMatch.id ? { ...match, result, hasResult: true } : match,
    )

    setMatches(updatedMatches)
    setIsDialogOpen(false)
  }

  // Función para eliminar el resultado
  const deleteResult = (matchId: number) => {
    const updatedMatches = matches.map((match) =>
      match.id === matchId ? { ...match, result: undefined, hasResult: false } : match,
    )

    setMatches(updatedMatches)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Calendario de Partidos</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Exportar</Button>
          <Button>Programar Partido</Button>
        </div>
      </div>

      {weeks.map((week) => (
        <div key={week} className="space-y-4">
          <div className="bg-blue-600 text-white font-medium px-4 py-3 rounded-md">Semana {week}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches
              .filter((match) => match.week === week)
              .map((match) => (
                <div key={match.id} className="bg-white rounded-md border overflow-hidden">
                  <div className="bg-gray-100 px-3 py-1 text-sm text-gray-600">Grupo {match.group}</div>
                  <div className="p-4">
                    <div className="flex flex-col items-center text-center mb-3">
                      <div className="font-medium">{match.player1}</div>
                      <div className="text-sm text-gray-500 my-1">vs</div>
                      <div className="font-medium">{match.player2}</div>
                    </div>

                    {match.result && <div className="text-center font-bold text-green-600 mb-3">{match.result}</div>}

                    {match.hasResult ? (
                      <Button variant="destructive" className="w-full" onClick={() => deleteResult(match.id)}>
                        Eliminar resultado
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                        onClick={() => openAddResultDialog(match)}
                      >
                        Agregar resultado
                      </Button>
                    )}
                    <div className="text-right text-xs text-gray-400 mt-2">#{match.id}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Diálogo para agregar resultado */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registrar Resultado</DialogTitle>
          </DialogHeader>

          {currentMatch && (
            <div className="space-y-4 py-4">
              <div className="text-center mb-4">
                <div className="font-medium">
                  {currentMatch.player1} vs {currentMatch.player2}
                </div>
                <div className="text-sm text-gray-500">Grupo {currentMatch.group}</div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <Label className="text-right">{currentMatch.player1}</Label>
                  <Label className="text-center">Set 1</Label>
                  <Label>{currentMatch.player2}</Label>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <Input
                    type="number"
                    min="0"
                    max="7"
                    value={set1Player1}
                    onChange={(e) => setSet1Player1(e.target.value)}
                    className="text-center"
                  />
                  <div className="text-center">-</div>
                  <Input
                    type="number"
                    min="0"
                    max="7"
                    value={set1Player2}
                    onChange={(e) => setSet1Player2(e.target.value)}
                    className="text-center"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <Label className="text-right">{currentMatch.player1}</Label>
                  <Label className="text-center">Set 2</Label>
                  <Label>{currentMatch.player2}</Label>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <Input
                    type="number"
                    min="0"
                    max="7"
                    value={set2Player1}
                    onChange={(e) => setSet2Player1(e.target.value)}
                    className="text-center"
                  />
                  <div className="text-center">-</div>
                  <Input
                    type="number"
                    min="0"
                    max="7"
                    value={set2Player2}
                    onChange={(e) => setSet2Player2(e.target.value)}
                    className="text-center"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <Label className="text-right">{currentMatch.player1}</Label>
                  <Label className="text-center">Set 3 (opcional)</Label>
                  <Label>{currentMatch.player2}</Label>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <Input
                    type="number"
                    min="0"
                    max="7"
                    value={set3Player1}
                    onChange={(e) => setSet3Player1(e.target.value)}
                    className="text-center"
                  />
                  <div className="text-center">-</div>
                  <Input
                    type="number"
                    min="0"
                    max="7"
                    value={set3Player2}
                    onChange={(e) => setSet3Player2(e.target.value)}
                    className="text-center"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={saveResult}>Guardar Resultado</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
