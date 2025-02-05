import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
//import "primereact/resources/themes/lara-light-teal/theme.css";
import "./globals.css";
import "primeicons/primeicons.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Froneus Campaigns",
  description: "Administración de campañas de llamados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <div className="relative pt-20 pb-16 bg-gray-200 min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
