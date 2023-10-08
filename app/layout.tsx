import { inter } from "@/lib/config/fonts";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "P for Pro",
  description: "Hiring and Hunting Made Easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
