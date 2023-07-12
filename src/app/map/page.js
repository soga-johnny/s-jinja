import MapComponent from "./map";

const siteName = "境内のご案内";
const url = "https://shijonawatejinja.or.jp/map";

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

export default function Map() {
  return <MapComponent />;
}
