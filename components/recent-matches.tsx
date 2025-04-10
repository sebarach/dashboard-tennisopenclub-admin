import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const recentMatches = [
  {
    id: 1,
    player1: { name: "Carlos A.", score: 6 },
    player2: { name: "Rafael N.", score: 4 },
    group: "A",
    date: "Hoy, 14:30",
  },
  {
    id: 2,
    player1: { name: "Novak D.", score: 6 },
    player2: { name: "Roger F.", score: 3 },
    group: "B",
    date: "Hoy, 12:15",
  },
  {
    id: 3,
    player1: { name: "Andy M.", score: 7 },
    player2: { name: "Stan W.", score: 6 },
    group: "C",
    date: "Ayer, 16:45",
  },
  {
    id: 4,
    player1: { name: "Daniil M.", score: 6 },
    player2: { name: "Alexander Z.", score: 2 },
    group: "D",
    date: "Ayer, 11:00",
  },
  {
    id: 5,
    player1: { name: "Stefanos T.", score: 6 },
    player2: { name: "Dominic T.", score: 4 },
    group: "A",
    date: "2 días atrás",
  },
]

export function RecentMatches() {
  return (
    <div className="space-y-2">
      {recentMatches.map((match) => (
        <Card key={match.id} className="overflow-hidden">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{match.player1.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm font-medium mt-1">{match.player1.name}</div>
                </div>
                <div className="text-2xl font-bold">
                  {match.player1.score} - {match.player2.score}
                </div>
                <div className="flex flex-col items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{match.player2.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm font-medium mt-1">{match.player2.name}</div>
                </div>
              </div>
              <div className="flex flex-col items-end text-xs text-muted-foreground">
                <div>Grupo {match.group}</div>
                <div>{match.date}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
