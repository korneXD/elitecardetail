import ReferenciakOldal from "@/components/pages/referenciakoldal";

export const metadata = {
    title: "Referenciák",
    description: "Tekints meg néhány fotót eddigi munkáimról - Elite Car Detail Kecskemét.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Page",
    name: "Referenciák",
    image: "/opengraph-image.png",
    description: "Tekints meg néhány fotót eddigi munkáimról - Elite Car Detail Kecskemét.",
};

export default function Referenciak() {
    return (
        <main>
            <ReferenciakOldal />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}