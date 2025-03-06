"use client"

import Cta from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Galleria from "@/components/referenciak/galleria/page";
import PageReferenciak from "@/components/referenciak/page";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollToPlugin } from "gsap/all";

export default function ReferenciakOldal() {

    const containerRef = useRef()
    const mainRef = useRef()

    const router = useRouter();

    gsap.registerPlugin(ScrollToPlugin);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, },
            { opacity: 1, duration: 1, ease: "power2.out" }
        );
        gsap.fromTo(
            mainRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    }, []);

    const navigateToNextPage = (url) => {
        if (url && url !== "/referenciak") {
            if (window.scrollY === 0) {
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        router.push(url);
                    },
                });
            } else {
                gsap.to(window, {
                    scrollTo: { y: 0, autoKill: false },
                    duration: 2,
                    ease: "power4.inOut",
                    onComplete: () => {
                        gsap.to(containerRef.current, {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                router.push(url);
                            },
                        });
                    },
                });
            }
        }
    };

    return (
        <section ref={containerRef} className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
            <div className="hidden md:flex">
                <Header navigateToNextPage={navigateToNextPage} />
            </div>
            <div ref={mainRef} className="flex-grow">
                <PageReferenciak />
                <Galleria />
                <Cta />
            </div>
            <Footer />
        </section>
    )
}