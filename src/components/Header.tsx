import NavBar from "@/components/NavBar";
import { createClient } from "@/prismicio";

// Este componente es de tipo server ya que se usa la funciones asíncronas
export default async function Header() {

    // Usamos la función createClient de prismicio.ts
  const client = createClient();

  // Obtenemos el documento settings xD
  const setting = await client.getSingle("settings");

  return (
    <div>
        <NavBar />
    </div>
  )
}
