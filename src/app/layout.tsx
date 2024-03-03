import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patternize",
  description: "Simple routine management app",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          {authModal}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
