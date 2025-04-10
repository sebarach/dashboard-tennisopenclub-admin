"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function GroupSettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Grupos</CardTitle>
          <CardDescription>Configura los parámetros para la fase de grupos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="num-groups">Número de Grupos</Label>
            <Select defaultValue="8">
              <SelectTrigger id="num-groups">
                <SelectValue placeholder="Seleccionar número" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4">4 grupos</SelectItem>
                <SelectItem value="8">8 grupos</SelectItem>
                <SelectItem value="16">16 grupos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="players-per-group">Jugadores por Grupo</Label>
            <Select defaultValue="4">
              <SelectTrigger id="players-per-group">
                <SelectValue placeholder="Seleccionar número" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 jugadores</SelectItem>
                <SelectItem value="4">4 jugadores</SelectItem>
                <SelectItem value="5">5 jugadores</SelectItem>
                <SelectItem value="6">6 jugadores</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="distribution-method">Método de Distribución</Label>
            <Select defaultValue="ranking">
              <SelectTrigger id="distribution-method">
                <SelectValue placeholder="Seleccionar método" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ranking">Por Ranking</SelectItem>
                <SelectItem value="random">Aleatorio</SelectItem>
                <SelectItem value="seeded">Por Cabezas de Serie</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="balanced-groups">Grupos Balanceados</Label>
            <Switch id="balanced-groups" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Guardar Configuración</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Clasificación</CardTitle>
          <CardDescription>Define cómo se clasifican los jugadores en los grupos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="points-win">Puntos por Victoria</Label>
            <Input id="points-win" type="number" defaultValue="3" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="points-draw">Puntos por Empate</Label>
            <Input id="points-draw" type="number" defaultValue="1" />
          </div>
          <div className="space-y-2">
            <Label>Criterios de Desempate</Label>
            <div className="space-y-2 border rounded-md p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">1. Enfrentamiento directo</span>
                <Button variant="ghost" size="sm">
                  ↑
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">2. Diferencia de sets</span>
                <Button variant="ghost" size="sm">
                  ↑
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">3. Sets a favor</span>
                <Button variant="ghost" size="sm">
                  ↑
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">4. Juegos a favor</span>
                <Button variant="ghost" size="sm">
                  ↑
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Clasificación a Brackets</Label>
            <RadioGroup defaultValue="top2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top1" id="top1" />
                <Label htmlFor="top1">Solo el primero de cada grupo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="top2" id="top2" />
                <Label htmlFor="top2">Los dos primeros de cada grupo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom">Configuración personalizada</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Guardar Configuración</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
