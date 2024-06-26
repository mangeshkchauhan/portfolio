import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
