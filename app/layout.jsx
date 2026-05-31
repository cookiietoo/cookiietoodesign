import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Inter({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Nilesh Chhipa — Senior Product Designer",
  description:
    "Senior Product Designer with 6 years across enterprise and consumer products. Past work: H&M, Airbnb, Government of Saudi Arabia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
