import ContactComponent from "./contact";

const siteName = "お問い合わせ";
const url = "https://shijonawatejinja.or.jp/contact";

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

export default function Contact() {
  return <ContactComponent />;
}
