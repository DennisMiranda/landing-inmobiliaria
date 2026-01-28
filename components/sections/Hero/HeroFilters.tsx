// components/hero/HeroFilters.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Building2, DollarSign, MapPin } from 'lucide-react'

export default function HeroFilters() {
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-lg md:grid-cols-4">
      <Filter icon={MapPin} label="Ubicación" />
      <Filter icon={Building2} label="Tipo" />
      <Filter icon={DollarSign} label="Precio" />
      <Button className="w-full">Buscar</Button>
    </div>
  )
}

function Filter({ icon: Icon, label }: any) {
  return (
    <div>
      <label className="text-xs text-foreground/60">{label}</label>
      <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2">
        <Icon size={16} className="text-primary" />
        <input
          placeholder={label}
          className="w-full text-sm outline-none"
        />
      </div>
    </div>
  )
}
