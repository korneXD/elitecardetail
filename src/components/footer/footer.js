import { services, socials } from "@/lib/constants";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background py-12 border-t border-border/20 flex justify-center items-center">
            <div className="flex justify-center items-center flex-col w-full px-4">
                <div className="flex justify-center items-center md:items-start flex-col md:flex-row w-full gap-8">
                    {[
                        {
                            title: "Rólunk",
                            content: (
                                <div className="flex justify-center items-start flex-col">
                                    <p className="text-sm text-muted-foreground">Prémium autókozmetikai szolgáltatások</p>
                                    <p className="text-sm text-muted-foreground">Kecskemét autókozmetika</p>
                                    <Link href="https://maps.app.goo.gl/tLWym4DoeUXUWUs3A" target="_blank" className="hover:text-primary transition-colors flex text-muted-foreground">
                                        <MapPin className="size-6 mr-1" />
                                        <p>Google Maps</p>
                                    </Link>
                                </div>

                            ),
                        },
                        {
                            title: "Szolgáltatások",
                            content: (
                                <ul className="space-y-2 text-sm">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <p
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {service.name}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ),
                        },
                        {
                            title: "Kapcsolat",
                            content: (
                                <address className="text-sm text-muted-foreground not-italic tracking-wide flex flex-col">
                                    <Link href="https://maps.app.goo.gl/tLWym4DoeUXUWUs3A">6000 Kecskemét, Izsáki út 20.</Link>
                                    <Link href="tel:+36202507753">Tel: +36 20 250 7753</Link>
                                    <Link href="mailto:elitecardetail6000@gmail.com">Email: elitecardetail6000@gmail.com</Link>
                                </address>
                            ),
                        },
                        {
                            title: "Kövess minket",
                            content: (
                                <div className="flex space-x-4">
                                    {socials.map((social, index) => (
                                        <Link key={index} href={social.path} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                            <social.icon className="size-6" />
                                        </Link>
                                    ))}
                                </div>
                            ),
                        },
                    ].map((section, index) => (
                        <div key={index} className="flex flex-1 justify-center items-center flex-col h-fit">
                            <h3 className={section.title == "Rólunk" || section.title == "Kapcsolat" ? "font-semibold mb-4 text-white w-full text-left px-2" : "font-semibold mb-4 text-white w-full text-center px-2"}>{section.title}</h3>
                            {section.content}
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground tracking-wide">
                    <p>© {new Date().getFullYear()} <span className="text-white">Elite</span> <span className="text-primary">Car Detail</span>. Minden jog fenntartva.</p>
                </div>
                <Link href="https://www.koresz.hu" target="_blank" className="text-muted-foreground mt-4">Készítette: <span className="text-primary underline">koresz.hu</span></Link>
            </div>
        </footer>
    )
}