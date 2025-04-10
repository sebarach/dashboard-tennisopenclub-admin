"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function BracketSettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Configuración General</CardTitle>
          <CardDescription>Configura los parámetros generales del bracket</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bracket-name">Nombre del Bracket</Label>
            <Input id="bracket-name" placeholder="Torneo Principal" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bracket-type">Tipo de Bracket</Label>
            <Select defaultValue="single">
              <SelectTrigger id="bracket-type">
                <SelectValue placeholder="Seleccionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Eliminación Simple</SelectItem>
                <SelectItem value="double">Eliminación Doble</SelectItem>
                <SelectItem value="consolation">Con Consolación</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="seeding-method">Método de Siembra</Label>
            <Select defaultValue="ranking">
              <SelectTrigger id="seeding-method">
                <SelectValue placeholder="Seleccionar método" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ranking">Por Ranking</SelectItem>
                <SelectItem value="random">Aleatorio</SelectItem>
                <SelectItem value="group">Por Posición en Grupos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="third-place-match">Partido por Tercer Lugar</Label>
            <Switch id="third-place-match" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Guardar Configuración</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Partidos</CardTitle>
          <CardDescription>Define cómo se jugarán los partidos en el bracket</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Formato de Partidos</Label>
            <RadioGroup defaultValue="best-of-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="best-of-3" id="best-of-3" />
                <Label htmlFor="best-of-3">Al mejor de 3 sets</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="best-of-5" id="best-of-5" />
                <Label htmlFor="best-of-5">Al mejor de 5 sets</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Formato de Sets</Label>
            <RadioGroup defaultValue="advantage">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advantage" id="advantage" />
                <Label htmlFor="advantage">Con Ventaja</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tiebreak" id="tiebreak" />
                <Label htmlFor="tiebreak">Tie-break en 6-6</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="super-tiebreak" id="super-tiebreak" />
                <Label htmlFor="super-tiebreak">Super Tie-break en tercer set</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="automatic-advance">Avance Automático</Label>
            <Switch id="automatic-advance" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Guardar Configuración</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
