import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes"

// Modern sans-serif font for main text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  // Includes all weights for better design flexibility
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

// Modern monospace font for code and accents
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Portfolio - Vikrant",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased 
            bg-background dark:bg-background-dark 
            text-foreground dark:text-foreground-dark min-h-screen`}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
