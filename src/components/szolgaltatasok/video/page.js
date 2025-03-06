import { ButtonReferences, CTAButton } from "@/components/ui/button";
import { Award, Brush, Droplet, Shield, Sparkles, SprayCan } from "lucide-react";
import Link from "next/link";

export default function AboutVideo() {
    const services = [{ icon: Sparkles, name: "Autó polírozás", descr: "Ragyogó autó, karcmentes felület, tartós védelem." }, { icon: Shield, name: "Karosszériavédö fóliázás", descr: "Védelem, fény, tartósság. Óvd meg autód fényezését!" }, { icon: SprayCan, name: "Kerámia bevonat telepítés", descr: "Hosszantartó védelem és ragyogás autód számára!" }, { icon: SprayCan, name: "Külsö-belsö kozmetika", descr: "Tiszta, ápolt és újszerű autó kívül-belül!" }, { icon: Brush, name: "Kárpittisztítás", descr: "Friss, foltmentes és higiénikus belsö tér!" }, { icon: Droplet, name: "Börtisztítás/ápolás", descr: "Tisztít, véd, megőrzi a bör minőségét!" }]
    return (
        <div className="flex w-full justify-center items-center flex-col-reverse md:flex-row px-4 py-6 bg-background gap-10">
            <video src="https://1vmw7h21w4.ufs.sh/f/XEkUUJjWZa5LsGus6ezjs2wHxCDO5M0lJvoQtZPT6I87qezS" width="300" height="240" controls className="rounded-3xl shadow-sm shadow-primary" />
            <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary flex items-center gap-3">
                    Szolgáltatásaim
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Autókozmetikám, autótisztítási és karosszéria védelmi szolgáltatások teljes csomagját kínálja.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {services.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="font-medium text-white">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.descr}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-4 md:justify-start justify-center items-center">
                    <Link href="/kapcsolat">
                        <CTAButton />
                    </Link>
                    <Link href="/referenciak">
                        <ButtonReferences />
                    </Link>
                </div>
            </div>
        </div>
    )
}