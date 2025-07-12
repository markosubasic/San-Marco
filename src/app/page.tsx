import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, MapPin, Mail, Clock, Car, Home, Shield, Sparkles, CheckCircle, Menu } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Autopraonica San Marco</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Početna
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Usluge
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              O nama
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:flex">
              <a href="tel:+385918978803">
                <Phone className="mr-2 h-4 w-4" />
                Pozovi
              </a>
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#home" className="text-lg font-medium hover:text-primary transition-colors block">
                    Početna
                  </a>
                  <a href="#services" className="text-lg font-medium hover:text-primary transition-colors block">
                    Usluge
                  </a>
                  <a href="#about" className="text-lg font-medium hover:text-primary transition-colors block">
                    O nama
                  </a>
                  <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors block">
                    Kontakt
                  </a>
                  <Separator />
                  <Button asChild className="w-full">
                    <a href="tel:+385918978803">
                      <Phone className="mr-2 h-4 w-4" />
                      Pozovi +385 91 897 8803
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-4">
                20+ godina iskustva
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Profesionalno pranje{" "}
                <span className="text-primary">automobila</span> i{" "}
                <span className="text-primary">tepiha</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vrhunska usluga pranja automobila i dubinskog čišćenja tepiha u Zagrebu.
                Koristimo najnoviju tehnologiju i ekološki prihvatljiva sredstva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild>
                  <a href="#contact">
                    Zakaži termin
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#services">
                    Pogledaj usluge
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Naše usluge</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Profesionalne usluge pranja automobila i tepiha prilagođene vašim potrebama
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Car Wash Services */}
              <Card className="overflow-hidden">
                <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                  <Image
                    src="public/images/car-wash-main.png"
                    alt="Professional car wash"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Pranje automobila
                  </CardTitle>
                  <CardDescription>
                    Kompletna njega vašeg vozila s više od 20 godina iskustva
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Vanjsko pranje s aktivnom pjenom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Unutarnje čišćenje i usisavanje</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Kemijsko pranje unutrašnjosti</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Vosak za visoki sjaj</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Pranje motora i podna zaštita</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rug Cleaning Services */}
              <Card className="overflow-hidden">
                <div className="h-48 sm:h-64 bg-gradient-to-br from-amber-500 to-orange-500 relative">
                  <img
                    src="public/images/rug-cleaning-main"
                    alt="Professional rug cleaning"
                    className="h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Pranje tepiha
                  </CardTitle>
                  <CardDescription>
                    Specijalizirano dubinsko čišćenje tepiha i prostirki
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Dubinsko pranje naprednom tehnologijom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Ekološki prihvatljiva sredstva</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Neutralizacija neugodnih mirisa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Kontrolirano sušenje</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Sigurno za obitelj i ljubimce</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">20+ godina iskustva</h3>
                <p className="text-muted-foreground">
                  Dugogodišnje iskustvo u profesionalnom pranju vozila i tepiha
                </p>
              </Card>
              <Card className="text-center p-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Najnovija tehnologija</h3>
                <p className="text-muted-foreground">
                  Koristimo najnapredniju opremu i ekološki prihvatljiva sredstva
                </p>
              </Card>
              <Card className="text-center p-6 sm:col-span-2 lg:col-span-1">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Garantirana kvaliteta</h3>
                <p className="text-muted-foreground">
                  Osiguravamo vrhunsku čistoću i svježinu za sve naše usluge
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">O nama</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Autopraonica San Marco posluje više od 20 godina, pružajući vrhunsku uslugu
                  pranja automobila i tepiha u Zagrebu. S ponosom surađujemo s brojnim tvrtkama
                  i privatnim korisnicima.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Naš stručni tim koristi najnoviju tehnologiju i sredstva kako bi osigurao
                  maksimalnu čistoću i zaštitu. Bilo da je riječ o vanjskom ili unutarnjem
                  pranju vozila, detaljnom čišćenju ili specijaliziranom pranju tepiha,
                  posvećeni smo pružanju usluge koja premašuje očekivanja.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button asChild>
                    <a href="#contact">Kontaktiraj nas</a>
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Glogovečka 2D, Zagreb
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="public/images/car-wash-about.jpg"
                  alt="Professional car washing"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="public/images/rug-cleaning-about.webp"
                  alt="Professional rug cleaning facility"
                  className="rounded-lg shadow-lg mt-8 w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Kontakt i lokacija</h2>
              <p className="text-xl text-muted-foreground">
                Posjetite nas ili nas kontaktirajte za više informacija
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Kontaktni podaci</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Telefon</p>
                        <p className="text-muted-foreground">+385 91 897 8803</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground break-all">marko.subasic0@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Adresa</p>
                        <p className="text-muted-foreground">Glogovečka 2D, Zagreb</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Radno vrijeme</p>
                        <p className="text-muted-foreground">Pozovite za dogovor termina</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Zakaži termin</CardTitle>
                    <CardDescription>
                      Kontaktirajte nas telefonski za dogovor termina
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" className="w-full" asChild>
                      <a href="tel:+385918978803">
                        <Phone className="mr-2 h-4 w-4" />
                        Pozovi +385 91 897 8803
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Naša lokacija</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.8914445478044!2d16.016847!3d45.8331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68c9d8c7e8f%3A0x8b1234567890abcd!2sGlogove%C4%8Dka%20ul.%202D%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-6 w-6" />
                <span className="text-lg font-bold">Autopraonica San Marco</span>
              </div>
              <p className="text-slate-300 mb-4">
                Profesionalne usluge pranja automobila i tepiha u Zagrebu već više od 20 godina.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Usluge</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Vanjsko pranje automobila</li>
                <li>Unutarnje čišćenje vozila</li>
                <li>Kemijsko pranje</li>
                <li>Pranje tepiha i prostirki</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-slate-300">
                <p>+385 91 897 8803</p>
                <p className="break-all">marko.subasic0@gmail.com</p>
                <p>Glogovečka 2D, Zagreb</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="text-center text-slate-400">
            <p>&copy; 2024 Autopraonica San Marco. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
