import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dictionary Hero Registry",
  description: "A shadcn custom registry for the Dictionary Hero component.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
