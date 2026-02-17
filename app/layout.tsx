import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "PARESO - Pawon Rempah Surakarta | Menjadikan Herbal Indonesia Mendunia",
  description: "Pusat pengembangan UMKM herbal terkemuka di Indonesia. Memberdayakan 100+ UMKM dengan produk berkualitas tinggi, terstandarisasi BPOM, dan berdaya saing global.",
  keywords: "PARESO, herbal Indonesia, UMKM herbal, rempah nusantara, jamu, produk herbal, Solo, Surakarta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-cream`}>
        {children}
      </body>
    </html>
  );
}
