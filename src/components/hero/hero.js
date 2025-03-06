import Image from "next/image";
import { Button, CTAButton } from "../ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
            <Image
                src="https://1vmw7h21w4.ufs.sh/f/XEkUUJjWZa5LQwaZisjFd67Nn8DFxig1VRWLIaXyrhTzbJBO"
                alt="Elite car detail"
                fill
                className="object-cover object-center brightness-90"
                priority
                unoptimized
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4 select-none">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
                    Prémium Autókozmetika <span className="text-primary">Kecskeméten</span>
                </h1>
                <p className="text-xl text-white/80 animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in-out">
                    Professzionális külsö-belsö tisztítás, polírozás és kerámiabevonat
                </p>
                <div className="flex flex-row gap-4 justify-center animate-fade-up animate-once animate-duration-700 animate-delay-700 animate-ease-in-out">
                    <Link href="/kapcsolat">
                        <CTAButton />
                    </Link>
                    <Link href="/szolgaltatasok">
                        <Button />
                    </Link>
                </div>
            </div>
        </section>
    )
}