import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy Counter",
  description: "The Fancy Counter by Big Boss Enterprises",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-1 justify-center items-center bg-slate-900 min-h-screen mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
