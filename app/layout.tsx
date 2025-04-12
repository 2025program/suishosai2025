import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
//import { CookieConsent } from "@/components/CookieConsent";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import Countdown from "@/components/countdown/countdown";
import WarningPopupCookie from "@/components/WarningPopupCookie";

const kosugi = Noto_Sans_JP({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "翠翔祭HP",
  description: "翠翔祭2025の公式サイトです。有益な情報を公開しています!",
  openGraph: {
    title: "翠翔祭HP",
    description: "翠翔祭2025の公式サイトです。有益な情報を公開しています!",
    url: "https://suishousai2025.vercel.app/",
    siteName: "翠翔祭HP",
    images: [
      {
        url: "https://suishousai2025.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "翠翔祭HPのプレビュー画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "翠翔祭HP",
    description: "横浜翠嵐高等学校",
    images: ["https://suishousai2025.vercel.app/twitter-image.jpg"],
  },
};


//開催期間に合わせて調整してください
const Enough = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (Enough) {
    return (
      <html lang="jp">
        <body className={kosugi.className}>
          <WarningPopupCookie />
          <HamburgerMenu />
          <main>
            {children}
          </main>
          {/* <CookieConsent /> */}
        </body>
      </html>
    );
  }

  return (
    <html lang="jp">
      <body className={kosugi.className}>
        <Countdown />
      </body>
    </html>
  )
}