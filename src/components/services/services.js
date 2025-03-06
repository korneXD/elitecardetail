import { services } from "@/lib/constants";

export default function Services() {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="flex justify-center items-center flex-col px-4 gap-12">
                <h2 className="text-3xl font-bold text-center text-foreground underline decoration-primary">Szolgáltatásaim</h2>
                <div className="flex justify-center items-center flex-wrap gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 border max-w-md w-full rounded-3xl shadow-sm border-white shadow-primary flex justify-center items-center flex-col"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-foreground">{service.name}</h3>
                            <service.icon className="size-10 hover:fill-primary cursor-pointer text-primary" />
                        </div>
                    ))}
                </div>
                <span className="text-foreground text-lg md:text-xl tracking-wide">Autókozmetikám, autótisztítási és karosszéria védelmi szolgáltatások teljes csomagját kínálja.</span>
            </div>
        </section>
    )
}