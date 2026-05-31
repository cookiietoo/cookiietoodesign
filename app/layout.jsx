import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/cursor/CustomCursor";
import PageTransition from "@/components/motion/PageTransition";

const grotesk = Inter({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://cookiietoodesign.vercel.app"),
  title: "Nilesh Chhipa — Senior Product Designer",
  description:
    "Senior Product Designer with 6 years across enterprise and consumer products. Past work: H&M, Airbnb, Government of Saudi Arabia.",
  openGraph: {
    title: "Nilesh Chhipa — Senior Product Designer",
    description:
      "Senior Product Designer with 6 years across enterprise and consumer products. Past work: H&M, Airbnb, Government of Saudi Arabia.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans">
        <SmoothScroll>
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
