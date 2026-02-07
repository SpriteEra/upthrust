import { hanzipen, instrumentSerif, inter } from "./fonts/fonts";
import "./globals.css";
import "./app.css";
import Script from "next/script";
import Analytics from "@/scripts/Analytics";

const isProd = process.env.NODE_ENV === "production";

export const metadata = {
  title: "UX & Product Design Agency for B2B Products | Upthrust",

  description: "We design conversion-focused UX and product experiences for B2B companies—reducing friction, increasing clarity, and driving measurable growth.",

  keywords: [
    "ecommerce marketing agency",
  ],

  // authors: [{ name: "Upthrust" }],
  // creator: "Upthrust",
  // publisher: "Upthrust",

  metadataBase: new URL("https://www.upthrust.design"),

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
        {/* <Analytics /> */}
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
