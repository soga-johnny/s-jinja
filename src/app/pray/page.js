import PrayComponent from "./pray";

const siteName = "境内のご案内";
const url = "https://shijonawatejinja.or.jp/pray";
const description = "四條畷神社のご祈祷、ご参拝について。お宮参り、初宮詣、結婚式や神葬祭等を承ります";

export const metadata = {
  title: siteName,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
  },
  twitter: {
    title: siteName,
    description,
  },
};

export default function Pray() {
  return <PrayComponent />;
}
