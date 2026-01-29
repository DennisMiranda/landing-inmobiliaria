import { Suspense } from "react";
import PropertiesSearchClient from "./PropertiesSearchClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Cargando propiedades...</div>}>
      <PropertiesSearchClient />
    </Suspense>
  );
}
