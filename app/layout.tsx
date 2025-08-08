import type { Metadata } from "next";
import { Inter, Courier_Prime, Special_Elite } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-courier" });
const special = Special_Elite({ subsets: ["latin"], weight: "400", variable: "--font-special" });

export const metadata: Metadata = {
  title: "Mangesh Kumar Chauhan | React, React Native, UI/UX Expert",
  description:
    "Discover the portfolio of Mangesh Kumar, an expert Frontend Developer specializing in React and React Native. Explore innovative UI/UX designs and responsive applications that enhance user experiences. Dive into a showcase of cutting-edge projects and see how Mangesh Kumar brings intuitive solutions to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${courier.variable} ${special.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
