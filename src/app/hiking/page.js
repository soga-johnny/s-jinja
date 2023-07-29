import HikingComponent from "./hiking";

const siteName = "飯盛山願かけ登山";
const url = "https://shijonawatejinja.or.jp/hiking";

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

export default function About() {
  return <HikingComponent />;
}
