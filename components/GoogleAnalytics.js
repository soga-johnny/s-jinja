"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
// import { useRouter } from "next/router"
import { Suspense, useEffect } from "react";
import { existsGaId, pageview } from "../lib/gtag";
import { GA_TRACKING_ID } from "../lib/gtag";

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";


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


export default function GoogleAnalytics() {
  return (
    <>
      {GA_TRACKING_ID && (
        <Suspense>
          <Analytics />
        </Suspense>
      )}
    </>
  );
}

// export default GoogleAnalytics;
