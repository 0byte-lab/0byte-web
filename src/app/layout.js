import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "0byte - SSL for AI Generated Content Powered by Solana.",
  description:
    "0byte is the cryptographic infrastructure layer for AI-generated content. It embeds zero-knowledge proofs into media at creation, making content verifiable, tamper-evident, and anchored on-chain for public auditability.",
  openGraph: {
    type: "website",
    url: "https://0byte.tech",
    siteName: "0byte",
    images: [
      {
        url: "https://github.com/user-attachments/assets/b75d322f-f57a-49a2-872f-cb15ae22e373",
        width: 1200,
        height: 630,
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
