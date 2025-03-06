"use client"

import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react"

export default function Header({ navigateToNextPage }) {

    const menuLinks = [{ name: "Föoldal", path: "/" }, { name: "Szolgáltatások", path: "/szolgaltatasok" }, { name: "Referenciák", path: "/referenciak" }, { name: "Kapcsolat", path: "/kapcsolat" }]

    const path = usePathname()

    const [open, setOpen] = useState(false)
    const container = useRef();
    const linkHolder = useRef([]);
    const menuOverlay = useRef();

    const tl = useRef();

    useEffect(() => {
        if (open) {
            tl.current.play();
            document.body.style.overflow = "hidden";
        } else {
            tl.current.reverse();
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    useGSAP(() => {
        gsap.set(menuOverlay.current, { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
        gsap.set(linkHolder.current, { y: 50, opacity: 0 });

        tl.current = gsap.timeline({ paused: true })
            .to(menuOverlay.current, {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(linkHolder.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    }, { scope: container });

    return (
        <header ref={container} className="sticky top-0 z-50 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between md:px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-light tracking-wider text-white">
                        ELITE<span className="font-bold text-primary">CAR</span>
                    </span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {menuLinks.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigateToNextPage(item.path)}
                            className={path == item.path ? "text-sm cursor-pointer uppercase tracking-widest text-primary transition-colors" : "text-sm cursor-pointer uppercase tracking-widest text-foreground hover:text-primary transition-colors"}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
                <nav className="md:hidden flex">
                    <button onClick={() => setOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white hover:text-muted-foreground">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </button>
                    <div ref={menuOverlay} className=" flex space-x-6 justify-center items-center fixed top-0 left-0 h-screen bg-black flex-col w-full">
                        <button onClick={() => setOpen(false)} className="top-4 right-1 absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex justify-center items-center flex-col gap-10">
                            {menuLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    ref={el => (linkHolder.current[index] = el)}
                                    onClick={() => setOpen(false)}
                                    className={path == item.path ? "text-lg relative cursor-pointer uppercase tracking-widest text-primary transition-colors" : "text-lg relative cursor-pointer uppercase tracking-widest text-foreground hover:text-primary transition-colors"}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}