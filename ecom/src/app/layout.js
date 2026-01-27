import { hanzipen, instrumentSerif, inter } from "./fonts/fonts";
import "./globals.css";
import "./app.css";
import Script from "next/script";

const isProd = process.env.NODE_ENV === "production";

export const metadata = {
  title: "D2C Ecommerce Marketing Agency | Scale Profitable Brands – Upthrust",

  description: "Scale your D2C brand with proven ads, CRO, and retention systems. Upthrust helps ecommerce brands grow profitably with data-driven execution.",

  keywords: [
    "ecommerce marketing agency",
  ],

  // authors: [{ name: "Upthrust" }],
  // creator: "Upthrust",
  // publisher: "Upthrust",

  metadataBase: new URL("https://www.upthrust.agency"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Scale Your D2C Brand Profitably with Upthrust",
    description: "From Meta & Google Ads to CRO and retention, we help D2C brands scale revenue without killing ROAS.",
    url: "https://www.upthrust.agency",
    siteName: "Upthrust",
    images: [
      {
        url: "/ecom/ecom-opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Upthrust – D2C Ecommerce Marketing Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Scale Your D2C Brand Profitably with Upthrust",
    description: "From Meta & Google Ads to CRO and retention, we help D2C brands scale revenue without killing ROAS.",
    images: ["/ecom/ecom-opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>

      <body className={`${inter.variable} ${instrumentSerif.variable} ${hanzipen.variable} antialiased`}>
        {isProd && (
          <Script
            id="gtm"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-T7PRVWR2');
              `,
            }}
          />
        )}
        {isProd && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T7PRVWR2"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}
