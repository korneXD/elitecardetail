import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="fixed top-0 z-40 w-full border-b border-border/20 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="https://1vmw7h21w4.ufs.sh/f/XEkUUJjWZa5LxH6MlrJyqW58ftnD7uREwK1OdmTsojelZF4G"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-light tracking-wider">
              ELITE<span className="font-bold text-primary">CAR</span>
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className="text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              Főoldal
            </Link>
            <Link
              href="/szolgaltatasok"
              className="text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              Szolgáltatások
            </Link>
            <Link
              href="/galeria"
              className="text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              Galéria
            </Link>
            <Link
              href="/kapcsolat"
              className="text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              Kapcsolat
            </Link>
          </nav>
          <button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menü</span>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">

            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Prémium Autókozmetika <span className="text-primary">Kecskeméten</span>
            </h1>
            <p className="text-xl text-white/80">Professzionális külső-belső tisztítás, polírozás és kerámiabevonat</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Időpontfoglalás
              </button>
              <button variant="outline" className="text-white border-white hover:bg-white/20" size="lg">
                Szolgáltatások
              </button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Szolgáltatásaink</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Külső tisztítás", "Belső tisztítás", "Kerámiabevonat"].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{service}</h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <button variant="link" className="text-primary">
                    Részletek <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Készüljön fel a tökéletes autóélményre</h2>
            <p className="text-xl mb-8">Foglaljon időpontot most és élvezze a professzionális autókozmetika előnyeit</p>
            <button className="bg-background text-foreground hover:bg-background/90" size="lg">
              Időpontfoglalás <Phone className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Rólunk</h3>
              <p className="text-sm text-muted-foreground">Prémium autókozmetikai szolgáltatások Kecskeméten</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Szolgáltatások</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/szolgaltatasok/kulso-tisztitas" className="text-muted-foreground hover:text-primary">
                    Külső tisztítás
                  </Link>
                </li>
                <li>
                  <Link href="/szolgaltatasok/belso-tisztitas" className="text-muted-foreground hover:text-primary">
                    Belső tisztítás
                  </Link>
                </li>
                <li>
                  <Link href="/szolgaltatasok/keramiabevonat" className="text-muted-foreground hover:text-primary">
                    Kerámiabevonat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kapcsolat</h3>
              <address className="text-sm text-muted-foreground not-italic">
                <p>1234 Kecskemét, Fő utca 123.</p>
                <p>Tel: +36 12 345 6789</p>
                <p>Email: info@elitecardetail.hu</p>
              </address>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kövess minket</h3>
              <div className="flex space-x-4">
                {/* Placeholder social media icons */}
                <a href="#" className="text-muted-foreground hover:text-primary">
                  FB
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  IG
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  YT
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Elite Car Detail. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

