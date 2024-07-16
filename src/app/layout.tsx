import type { Metadata } from "next";
import local from "next/font/local";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const redhat = local({
  src: [
    {
      path: "../../public/assets/fonts/static/RedHatText-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/assets/fonts/static/RedHatText-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/static/RedHatText-Semibold.ttf",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "Flowers delivery service",
  description: "Flowers delivery service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${redhat.className} bg-rose-50 flex justify-center`}>
        {children}
      </body>
    </html>
  );
}
