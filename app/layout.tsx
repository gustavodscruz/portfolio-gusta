import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = localFont({
  src: "../font/SpaceGrotesk.ttf",
  weight: '100 900',
  variable: "--primary",
});

export const metadata: Metadata = {
  title: "Portfolio Admin",
  description: "Portfolio with Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-primary max-w-screen-xl m-auto min-h-screen flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}