import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OpenPanelComponent } from "@openpanel/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "0byte - Cryptographic Trust for AI Media.",
  description:
    "0byte is the cryptographic infrastructure layer for AI-generated content—embedding zero-knowledge fingerprints so every file is instantly verifiable and tamper-evident.",
  openGraph: {
    type: "website",
    url: "https://0byte.tech",
    siteName: "0byte",
    images: [
      {
        url: "https://0byte.tech/assets/0byte-og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "0byte - Cryptographic Trust for AI Media.",
    description:
      "0byte is the cryptographic infrastructure layer for AI-generated content—embedding zero-knowledge fingerprints so every file is instantly verifiable and tamper-evident.",
    images: ["https://0byte.tech/assets/0byte-og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OpenPanelComponent
          clientId="c1978b80-adf0-48d3-8440-1aa91edb4701"
          trackScreenViews={true}
          trackAttributes={true}
          trackOutgoingLinks={true}
        />
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
