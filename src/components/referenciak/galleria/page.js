import Image from "next/image";
import Link from "next/link";

export default function Galleria() {
    const images = [
        "XEkUUJjWZa5LG6zcQmBssaUmjqdf5vMYEIACkpiwVZ1HbB8J",
        "XEkUUJjWZa5LWnzWKOdB0zhvtSY9gQf6ourclbp4eyX78iFq",
        "XEkUUJjWZa5Loc0AiI1UhEMT7VP8Bc4AQDsKiCvOrodXmYqI",
        "XEkUUJjWZa5LN3ehlYXTPVmXlwUtzh5vQx1prqWKoSkA3B9b",
        "XEkUUJjWZa5LWV8eMLdB0zhvtSY9gQf6ourclbp4eyX78iFq",
        "XEkUUJjWZa5L9SOjTNwz7PRiFSbfD2W6GAcgoLvehjIYZtB3",
        "XEkUUJjWZa5LhRxlEhkrV2zPnbu3sXKhMD7JylWRYFCQa4fN",
        "XEkUUJjWZa5LmOVbvQPjzrqoaeWK8VDNY0AHIshEdn6fB971",
        "XEkUUJjWZa5Lfnqm3pHaRxBKsUtNLuPCHQ4XSYlwrqmkeE90",
        "XEkUUJjWZa5L3duVnoLBnuc4RXsyV5Sa9IAmtbxPHfzkDpvN",
        "XEkUUJjWZa5L2ro3JWcfAxdqY1OvCrD3VjL9Hlp6uFoWGzQN",

    ];

    return (
        <div className="flex justify-center items-center w-full h-full p-4 flex-col gap-4">
            <div className="text-muted-foreground flex gap-2 text-xs whitespace-nowrap md:text-xl">
                <h2>További fotók megtekintéséhez kattints ide:</h2>
                <Link href="https://www.facebook.com/Elitecardetailz/photos?locale=hu_HU" target="_blank" className="text-primary underline">Képek</Link>
            </div>
            <div className=" w-full columns-2 space-y-4 px-2 md:columns-3 lg:columns-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                    >
                        <Image
                            src={`https://1vmw7h21w4.ufs.sh/f/${image}`}
                            alt={index}
                            height={400}
                            width={400}
                            unoptimized
                            priority
                            className="rounded-xl transition-all hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}