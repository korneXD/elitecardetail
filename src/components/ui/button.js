import { Phone } from "lucide-react"

export const Button = () => {
    return (
        <button
            className="text-white bg-black hover:scale-105 transition-all cursor-pointer hover:rounded-3xl hover:text-black hover:bg-white duration-700 text-sm md:text-lg border-white border px-4 py-2"
        >
            Szolgáltatások
        </button>
    )
}

export const ButtonReferences = () => {
    return (
        <button
            className="text-white bg-black hover:scale-105 transition-all cursor-pointer hover:rounded-3xl hover:text-black hover:bg-white duration-700 text-sm md:text-lg border-white border px-4 py-2"
        >
            Referenciák
        </button>
    )
}

export const CTAButton = () => {
    return (
        <button
            className="bg-primary flex justify-center items-center text-sm md:text-lg px-4 py-2 text-primary-foreground hover:scale-105 transition-all hover:rounded-3xl cursor-pointer duration-600 hover:text-primary hover:bg-black"
        >
            Idöpontfoglalás
            <Phone className="ml-2 size-4" />
        </button>
    )
}