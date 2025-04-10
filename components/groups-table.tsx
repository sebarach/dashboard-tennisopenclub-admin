"use client"

import Link from "next/link"

// Tipo para los jugadores
interface Player {
  id: number
  name: string
  group: number
  played: number
  won: number
  lost: number
  points: number
}

// Datos de ejemplo para los jugadores
const playersData: Player[] = [
  // Grupo 1
  { id: 1, name: "Jose Galaz", group: 1, played: 1, won: 1, lost: 0, points: 3 },
  { id: 2, name: "Matías Pérez Molina", group: 1, played: 2, won: 0, lost: 1, points: 0 },
  { id: 3, name: "Felipe Varas", group: 1, played: 0, won: 0, lost: 0, points: 0 },
  { id: 4, name: "Javier Petric", group: 1, played: 0, won: 0, lost: 0, points: 0 },
  { id: 5, name: "Claudio Acuña", group: 1, played: 0, won: 0, lost: 0, points: 0 },

  // Grupo 2
  { id: 6, name: "Marcos Salazar", group: 2, played: 1, won: 1, lost: 0, points: 3 },
  { id: 7, name: "Matías Pizarro", group: 2, played: 2, won: 1, lost: 1, points: 3 },
  { id: 8, name: "Wanderley Durán", group: 2, played: 0, won: 0, lost: 0, points: 0 },
  { id: 9, name: "Jorge Marambio", group: 2, played: 1, won: 0, lost: 1, points: 0 },
  { id: 10, name: "César Godoy", group: 2, played: 0, won: 0, lost: 0, points: 0 },

  // Grupo 3
  { id: 11, name: "Roberto Medina", group: 3, played: 1, won: 1, lost: 0, points: 3 },
  { id: 12, name: "Sebastian Sepulveda", group: 3, played: 2, won: 0, lost: 1, points: 0 },
  { id: 13, name: "Marco Castillo", group: 3, played: 0, won: 0, lost: 0, points: 0 },
  { id: 14, name: "Sergio Mendoza", group: 3, played: 0, won: 0, lost: 0, points: 0 },
  { id: 15, name: "Daniel Vera", group: 3, played: 0, won: 0, lost: 0, points: 0 },

  // Grupo 4
  { id: 16, name: "Nelson Molina", group: 4, played: 0, won: 0, lost: 0, points: 0 },
  { id: 17, name: "Julio Peña", group: 4, played: 0, won: 0, lost: 0, points: 0 },
  { id: 18, name: "Danilo Milla", group: 4, played: 0, won: 0, lost: 0, points: 0 },
  { id: 19, name: "Pablo Rodríguez", group: 4, played: 0, won: 0, lost: 0, points: 0 },
  { id: 20, name: "Nelson Loyola", group: 4, played: 0, won: 0, lost: 0, points: 0 },

  // Grupo 5
  { id: 21, name: "Ignacio Cid", group: 5, played: 1, won: 1, lost: 0, points: 3 },
  { id: 22, name: "Jonathan Valle", group: 5, played: 2, won: 0, lost: 1, points: 0 },
  { id: 23, name: "Fernando García", group: 5, played: 0, won: 0, lost: 0, points: 0 },
  { id: 24, name: "Cristhian Vidal", group: 5, played: 0, won: 0, lost: 0, points: 0 },
  { id: 25, name: "Néstor Riquelme Jara", group: 5, played: 0, won: 0, lost: 0, points: 0 },
]

export function GroupsTable() {
  // Obtener los grupos únicos
  const groups = Array.from(new Set(playersData.map((player) => player.group))).sort((a, b) => a - b)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <div className="bg-blue-600 w-1 h-8 mr-3"></div>
        <h1 className="text-2xl font-bold text-blue-600">Cuadro de Grupos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {groups.map((group) => {
          const groupPlayers = playersData
            .filter((player) => player.group === group)
            .sort((a, b) => b.points - a.points || b.won - a.won)

          return (
            <div key={group} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-blue-600">Grupo {group}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Jugador</th>
                      <th className="p-3 text-center">PJ</th>
                      <th className="p-3 text-center">PG</th>
                      <th className="p-3 text-center">PP</th>
                      <th className="p-3 text-center">PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupPlayers.map((player) => (
                      <tr key={player.id} className="border-b last:border-b-0 hover:bg-gray-50">
                        <td className="p-3">
                          <Link href="#" className="text-blue-600 hover:underline">
                            {player.name}
                          </Link>
                        </td>
                        <td className="p-3 text-center">{player.played}</td>
                        <td className="p-3 text-center">{player.won}</td>
                        <td className="p-3 text-center">{player.lost}</td>
                        <td className="p-3 text-center">{player.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
