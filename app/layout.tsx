import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "NextJS Ultimate Course",
  description:
    "A community-driven platform for asking and answering programming questions. " +
    "Get help, share knowledge, and collaborate with developers from around the world. " +
    "Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Inter.className is used like default font */}
      <body className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem disableTransitionOnChange>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
