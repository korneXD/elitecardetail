import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Elite Car Detail - Prémium Autókozmetika Kecskeméten",
  description:
    "Prémium autókozmetikai szolgáltatások Kecskeméten. Külső-belső tisztítás, polírozás, kerámiabevonat a tökéletes megjelenésért.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={orbitron.variable}
      >
        {children}
      </body>
    </html>
  );
}
