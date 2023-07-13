import "./globals.css";
import { Shippori_Mincho } from "next/font/google";

const siteName = "四條畷神社";
const description =
  "大阪・四條畷市、飯盛山の山麓に鎮座する、楠正行公（小楠公さん）を主祭神とした心願成就のご利益がある神社";
const url = "https://shijonawatejinja.or.jp";

export const metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@soga_johnny",
  },
  // verification: {
  //   google: '',
  // },
  alternates: {
    canonical: url,
  },
};

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  //  weight: ['400','500','600'],
  weight: ["600"],
  variable: "--font-shippori",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={shippori.variable}>{children}</body>
    </html>
  );
}
