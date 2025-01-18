import type { Metadata } from "next";
import { montserrat } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Products CRUD",
  description: "A simple CRUD app for products implemented with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/icon.svg"
        />
      </head>
      <body
        className={`${montserrat} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
