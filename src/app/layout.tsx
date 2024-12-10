import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { DM_Sans } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fuente DM Sans con tailwindcss
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Usamos la variable de fuente DM Sans
    <html lang="en" className={dmSans.variable}>
      <body className="bg-[#070815] text-white">
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
