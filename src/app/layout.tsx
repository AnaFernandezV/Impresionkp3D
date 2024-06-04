import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impresion Kp3D",
  description: "Impresiones corporativas a pedido",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ES">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
