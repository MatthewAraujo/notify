import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notify - Get GitHub Repository Notifications",
  description:
    "Notify is designed to make receiving notifications from GitHub repositories easier. Choose which notifications you want to receive in your email.",
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notify - Get GitHub Repository Notifications",
    description:
      "Notify is designed to make receiving notifications from GitHub repositories easier. Choose which notifications you want to receive in your email.",
    images: ["https://i.imgur.com/MPMcyPP.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex min-h-screen flex-col ${inter.className}`}>
            <Header />
            <div className="flex flex-1 justify-center w-full">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
                <Toaster />
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
