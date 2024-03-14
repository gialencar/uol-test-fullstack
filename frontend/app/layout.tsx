import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciamento de Clientes - UOL Fullstack Challenge",
  description: "UOL Fullstack Challenge frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto flex min-h-screen w-full flex-1 shrink-0 justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
