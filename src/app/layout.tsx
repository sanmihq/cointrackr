import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import { Lexend } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
        <Providers>
          <div>
            {/* <div className="w-60">
              <Sidebar />
            </div> */}
            <div className="flex-1 flex flex-col gap-24">
              <div className="z-50">
                <Header />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
