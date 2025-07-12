import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Autopraonica San Marco - Profesionalno pranje automobila i tepiha Zagreb",
  description: "Preko 20 godina iskustva u profesionalnom pranju automobila i dubinskom čišćenju tepiha u Zagrebu. Najnovija tehnologija, ekološki prihvatljiva sredstva. Glogovečka 2D, Zagreb.",
  keywords: "autopraonica, pranje automobila, pranje tepiha, Zagreb, dubinsko čišćenje, kemijsko pranje, San Marco, Glogovečka",
  openGraph: {
    title: "Autopraonica San Marco - Profesionalno pranje automobila i tepiha",
    description: "Vrhunska usluga pranja automobila i dubinskog čišćenja tepiha u Zagrebu. 20+ godina iskustva.",
    type: "website",
    locale: "hr_HR",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0XwOkGN7J9QrKP4P0zGYoB2JvDVDQTXs&libraries=places"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
