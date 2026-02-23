import { Inter, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: "italic",
});


export const hanzipen = localFont({
  src: "./fonts/hanzipen-en.woff2",
  variable: "--font-hanzipen",
  display: "swap",
  preload: false,
});

