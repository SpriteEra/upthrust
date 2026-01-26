import Navbar from "@/components/Navbar";
import { hanzipen, instrumentSerif, inter } from "./fonts/fonts";
import "./globals.css";
import "./app.css";
import Script from "next/script";

const isProd = process.env.NODE_ENV === "production";

export const metadata = {
  title: "Upthrust – Scale D2C Brands to 45 Lakhs+ Per Month",
  description:
    "Upthrust is a D2C marketing agency helping brands scale to ₹45 Lakhs+ per month using high-converting ads, CRO-driven landing pages, and compounding growth systems.",

  keywords: [
    "D2C marketing agency",
    "ecommerce growth agency",
    "performance marketing",
    "UGC ads agency",
    "Shopify growth",
    "Meta ads agency",
  ]
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
