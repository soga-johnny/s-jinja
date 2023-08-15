"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
// import { useRouter } from "next/router"
import { useEffect } from "react";
import { existsGaId, GA_TRACKING_ID, pageview } from "../src/app/lib/gtag";

const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }
    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

{
  /* <Script
strategy="afterInteractive"
src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
/>
<Script
id="gtag-init"
strategy="afterInteractive"
dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtag.GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `,
}}
/> */
}