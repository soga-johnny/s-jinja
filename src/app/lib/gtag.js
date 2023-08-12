export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";

export const existsGaId = GA_TRACKING_ID !== "";

export const pageview = (path) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: path,
  });
};
