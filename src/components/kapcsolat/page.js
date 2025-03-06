import Image from "next/image";
import { Button, CTAButton } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import { socials } from "@/lib/constants";

export default function PageKapcsolat() {
    return (
        <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
            <Image
                src="https://1vmw7h21w4.ufs.sh/f/XEkUUJjWZa5LDMDp9t5jgon70GbsJhUufdtRLB9zAEQlySCk"
                alt="Elite car detail kapcsolat"
                fill
                className="object-cover object-center brightness-90"
                priority
                unoptimized
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4 select-none">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
                    Elite <span className="text-primary">Car Detail</span> <br /> Kapcsolat
                </h1>
                <p className="text-md md:text-xl text-white/80 animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in-out">
                    Keress az alábbi elérhetöségeim közül.
                </p>
                <address className="whitespace-nowrap text-muted-foreground not-italic tracking-widest flex flex-col">
                    <Link href="https://maps.app.goo.gl/tLWym4DoeUXUWUs3A" className="text-primary text-[4vw] md:text-xl">6000 Kecskemét, Izsáki út 20.</Link>
                    <Link href="tel:+36202507753" className="group">Tel: <span className="group-hover:text-primary md:text-xl text-[4vw]">+36 20 250 7753</span></Link>
                    <Link href="mailto:elitecardetail6000@gmail.com" className="group text-[4vw] md:text-xl">Email: <span className="group-hover:text-primary">elitecardetail6000@gmail.com</span></Link>
                </address>
                <div className="flex justify-center items-center gap-6">
                    {socials.map((social, index) => (
                        <Link key={index} href={social.path} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <social.icon className="size-7" />
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-once animate-duration-700 animate-delay-700 animate-ease-in-out">
                </div>
            </div>
        </section>
    )
}