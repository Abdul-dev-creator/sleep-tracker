import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Modern sleep tracker App",
  description: "amodern sleep tracker app built with Next.js, TypeScript, and Tailwind CSS. Track your sleep patterns, set goals, and improve your sleep quality with our intuitive interface and powerful features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}
