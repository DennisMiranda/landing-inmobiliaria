"use client";
import { Suspense } from "react";
import PropertySaleClient from "./PropertySaleClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Cargando formulario...</div>}>
      <PropertySaleClient />
    </Suspense>
  );
}
