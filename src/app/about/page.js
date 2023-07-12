import AboutComponent from "./about";

const siteName = "四條畷神社について";
const url = "https://shijonawatejinja.or.jp/about";

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
  return <AboutComponent />;
}
