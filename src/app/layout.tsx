import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🎄 Party de Noël 2024 🎅",
  description: "La fête de Noël la plus épique de l'année!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

