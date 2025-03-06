import KapcsolatOldal from "@/components/pages/kapcsolatoldal";

export const metadata = {
    title: "Kapcsolat",
    description: "Lépj kapcsolatba velem - Elite Car Detail Kecskemét.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Page",
    name: "Kapcsolat",
    image: "/opengraph-image.png",
    description: "Lépj kapcsolatba velem - Elite Car Detail Kecskemét.",
};

export default function Kapcsolat() {
    return (
        <main>
            <KapcsolatOldal />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}

