"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RankingSettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Puntos</CardTitle>
          <CardDescription>Define cómo se asignan los puntos para el ranking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Posición</TableHead>
                <TableHead>Fase de Grupos</TableHead>
                <TableHead>Octavos</TableHead>
                <TableHead>Cuartos</TableHead>
                <TableHead>Semifinal</TableHead>
                <TableHead>Final</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Ganador</TableCell>
                <TableCell>
                  <Input type="number" defaultValue="10" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="20" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="40" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="60" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="100" className="w-16" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Finalista</TableCell>
                <TableCell>
                  <Input type="number" defaultValue="5" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="10" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="20" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="40" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="60" className="w-16" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Semifinalista</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  <Input type="number" defaultValue="10" className="w-16" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="20" className="w-16" />
                </TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Guardar Configuración</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Opciones de Ranking</CardTitle>
          <CardDescription>Configura cómo se calculan y muestran los rankings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-update">Actualización Automática</Label>
            <Switch id="auto-update" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="show-changes">Mostrar Cambios de Posición</Label>
            <Switch id="show-changes" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="separate-rankings">Rankings Separados por Grupo</Label>
            <Switch id="separate-rankings" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="include-sets">Incluir Diferencia de Sets</Label>
            <Switch id="include-sets" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ranking-history">Historial de Rankings</Label>
            <div className="flex items-center gap-2">
              <Input id="ranking-history" type="number" defaultValue="5" className="w-20" />
              <span className="text-sm text-muted-foreground">torneos anteriores</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Guardar Configuración</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
