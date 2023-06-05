"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="bg-gray-300 w-full h-screen flex gap-3">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
