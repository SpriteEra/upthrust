import { hanzipen, instrumentSerif, inter, caveat } from "./fonts/fonts";
import "./globals.css";
import "./app.css";
import Script from "next/script";
import Analytics from "@/scripts/Analytics";

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

      <body className={`${inter.variable} ${instrumentSerif.variable} ${hanzipen.variable} ${caveat.variable} antialiased`}>
        <Analytics />
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
