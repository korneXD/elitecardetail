import Image from "next/image";
import { CTAButton } from "../ui/button";
import Link from "next/link";

export default function PageReferenciak() {
    return (
        <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden w-full">
            <Image
                src="https://1vmw7h21w4.ufs.sh/f/XEkUUJjWZa5Loc0AiI1UhEMT7VP8Bc4AQDsKiCvOrodXmYqI"
                alt="Luxury car being detailed"
                fill
                className="object-cover object-center brightness-90"
                priority
                unoptimized
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4 select-none">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
                    Referenciák
                </h1>
                <p className="text-xl text-white/80 animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in-out">
                    Galléria eddigi munkáimról.
                </p>
                <div className="flex flex-col w-full items-center sm:flex-row gap-4 justify-center animate-fade-up animate-once animate-duration-700 animate-delay-700 animate-ease-in-out">
                    <Link href="/kapcsolat">
                        <CTAButton />
                    </Link>
                </div>
            </div>
        </section>
    )
}