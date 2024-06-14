import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarifion",
  description: "Clarifion upsell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
