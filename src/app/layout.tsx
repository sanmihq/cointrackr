import type { Metadata } from "next";
// import { Lexend } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import App from "./app";

// const lexend = Lexend({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const poppins = Poppins({
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
    <html lang="en" className="bg-[#090d16] text-white">
      <body className={`${poppins.className} max-w-[100rem] mx-auto`}>
        <Providers>
          <App />
        </Providers>
      </body>
    </html>
  );
}
