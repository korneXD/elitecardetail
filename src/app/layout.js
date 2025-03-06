import { Orbitron } from "next/font/google"
import "./globals.css"
import Header from "@/components/header/header";
import { description, title } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/react"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "autókozmetika Kecskemét",
    "autómosás Kecskemét",
    "autódetailing Kecskemét",
    "autófelületkezelés",
    "autó polírozás",
    "autó belső tisztítás",
    "autó külső tisztítás",
    "gépkocsi detailing",
    "autókozmetikai szolgáltatások",
    "prémium autókozmetika",
    "autó áppolás",
    "karosszéria védelem",
    "autó üvegtisztítás",
    "autó fényezés",
    "autó tisztítás és polírozás",
    "autókozmetika ár",
    "autókozmetika ajánlat",
    "autókozmetika szakember",
    "autókozmetika Kecskemét Elite Car Detail",
    "autókozmetika Kecskemét prémium szolgáltatások"
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon.ico",
    },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`${orbitron.className} scroll-smooth bg-background`}
      >
        <div className="md:hidden">
          <Header />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
