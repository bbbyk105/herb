import type { Metadata } from "next";
import { Aboreto, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "herbacie LABO",
  description: "herbacie LABO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKaku.variable} ${aboreto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
