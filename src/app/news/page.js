import NewsComponent from "./news";

const siteName = "お知らせ・お問い合わせ";
const url = "https://shijonawatejinja.or.jp/news";

export const metadata = {
  title: siteName,
  openGraph: {
    title: siteName,
    url,
  },
  twitter: {
    title: siteName,
  },
};

export default function Nango() {
  return <NewsComponent />;
}
