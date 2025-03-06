import { Phone } from "lucide-react";
import Link from "next/link";

export default function Cta() {
    return (
        <section className="py-24 bg-primary text-primary-foreground flex justify-center items-center">
            <div className="flex justify-center items-center flex-col px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Minden autó megérdemel egy kis luxust.</h2>
                <p className="text-xl mb-8">Foglaljon idöpontot most és élvezze az <span className="bg-black px-1 text-white">Elite <span className="text-primary">Car Detail</span></span> autókozmetika elönyeit</p>
                <Link
                    href="/kapcsolat"
                    className="bg-background text-foreground transition-all hover:rounded-3xl duration-700 flex justify-center items-center px-4 py-2 text-lg hover:text-primary cursor-pointer hover:scale-105"
                >
                    Idöpontfoglalás
                    <Phone className="ml-2 size-4" />
                </Link>
            </div>
        </section>
    )
}