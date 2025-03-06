import SzolgaltatasokOldal from "@/components/pages/szolgaltatasokoldal";

export const metadata = {
    title: "Szolgáltatások",
    description: "Tekintsd meg szolgáltatásaimat - Elite Car Detail Kecskemét.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Page",
    name: "Szolgáltatások",
    image: "/opengraph-image.png",
    description: "Tekintsd meg szolgáltatásaimat - Elite Car Detail Kecskemét.",
};

export default function Szolgaltatasok() {
    return (
        <main>
            <SzolgaltatasokOldal />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}