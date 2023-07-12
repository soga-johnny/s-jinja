import EventsComponent from "./events";

const siteName = "年中行事";
const url = "https://shijonawatejinja.or.jp/events";

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
  return <EventsComponent />;
}
