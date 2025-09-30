import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";

import "./globals.css";

export const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-caslon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JabberJake",
  description: "Real Time Chat application, woohoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreCaslon.variable} antialiased bg-gradient-to-bl from-zinc-800 to-zinc-950 text-white font-calistoga`}
      >
        {children}
      </body>
    </html>
  );
}
