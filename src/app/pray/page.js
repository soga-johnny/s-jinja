import PrayComponent from "./pray";

const siteName = "境内のご案内";
const url = "https://shijonawatejinja.or.jp/pray";

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

export default function Pray() {
  return <PrayComponent />;
}
