import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import { Lexend } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// const inter = Inter({ subsets: ['latin'] })
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CoinTrackr - Your Crypto Companion",
  description:
    "Explore, track, and transact with ease on CoinTrackr. Stay informed on cryptocurrency prices, market trends, and seamlessly manage your transactions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.className} max-w-[100rem] mx-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
