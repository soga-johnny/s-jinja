import AmuletsComponent from "./amulets";

const siteName = "授与品";
const url = "https://shijonawatejinja.or.jp/amulets";

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

export default function Amulets() {
  return <AmuletsComponent />;
}
