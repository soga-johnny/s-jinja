import AccessComponent from "./access";

const siteName = "交通アクセス";
const url = "https://shijonawatejinja.or.jp/access";

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

export default function Access() {
  return <AccessComponent />;
}
