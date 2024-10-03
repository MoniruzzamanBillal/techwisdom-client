import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/lib/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tech Wisdom",
  description: "Created by Md. Moniruzzaman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black100 `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
