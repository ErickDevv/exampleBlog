import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "./components/Nav";

//GOOGLE ANALYTICS
import { GoogleAnalytics } from "@next/third-parties/google";

//GOOGLE TAG MANAGER
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erick Medel - Example Blog",
  description: "Example log by Erick Medel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {/* Open Graph */}
          <meta property="og:image" content="/og-image.png" />

          {/* Google Analytics*/}

          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
          />

          {/* Google Tag Manager: */}
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}
          />
          <main className="min-h-screen max-w-[900px] mx-auto max-[800px]:pt-4  text-white px-10 min-[800px]:px-0 bg-gradient-to-br from-[#1f1f1f] to-[#2f2f2f]">
            <Nav />
            {children}
          </main>
        </Providers>
      </body>{" "}
    </html>
  );
}
