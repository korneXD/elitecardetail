import HomePage from "@/components/pages/homepage";
import { description } from "@/lib/constants";

export const metadata = {
  title: "Elite Car Detail - Autókozmetika Kecskemét",
  description: description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Page",
  name: "Főoldal",
  image: "/opengraph-image.png",
  description: description,
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}

