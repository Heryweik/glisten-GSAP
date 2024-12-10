import WordMark from "@/components/WordMark";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from '@prismicio/next';
import Link from "next/link";

export default async function Footer() {
  
  // Usamos la función createClient de prismicio.ts
  const client = createClient();

  // Obtenemos el documento settings
  const setting = await client.getSingle("settings");

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href={'/'}>
        <WordMark />
        {/* Añadimos un span con la clase sr-only, esta clase es para que el texto sea leído por los lectores de pantalla */}
        <span className="sr-only">Glisten.ai Home Page</span>
      </Link>
        <nav aria-label="Footer">
          <ul className="flex gap-6">
            {setting.data.navigation.map((item) => (
              <li key={item.label}>
                {/* El inline-flex sirve para que los elementos se muestren en línea */}
                <PrismicNextLink field={item.link}
                className="inline-flex min-h-11 items-center"
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
    </footer>
  )
}
