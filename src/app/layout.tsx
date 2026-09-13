import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils";


const bebasNeue = Oswald({
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Urban Fades",
  description:
    "Urban Fades Barbershop - Precision Haircuts & Grooming in West Allis, WI. Experience expert barbering, hot towel shaves, and stylish fades in a modern, welcoming environment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        bebasNeue.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
