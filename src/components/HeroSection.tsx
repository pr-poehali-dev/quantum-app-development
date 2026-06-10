import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      image: "https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/98c75f2c-0460-42a6-a185-b9ba8f2c061e.jpg",
      alt: "Перманентный макияж бровей",
    },
    {
      image: "https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/605deaea-1842-410a-88eb-a450338c4bf2.jpg",
      alt: "Перманентный макияж глаз",
    },
    {
      image: "https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/c3657608-513f-4eae-8ba2-d1f467163013.jpg",
      alt: "Парикмахерские услуги",
    },
  ]

  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "О нас", href: "#mission" },
    { name: "Услуги", href: "#community" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Записаться", href: "#join" },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        <div className="text-white font-bold text-xl tracking-widest" style={{ fontFamily: "var(--font-serif)" }}>
          BEAUTY STUDIO
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-pink-300 transition-colors duration-300 font-medium tracking-wide pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-pink-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Меню</span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/95 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-pink-300 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <p className="text-sm md:text-base font-light tracking-[0.3em] mb-4 text-pink-300 uppercase">
            Студия красоты
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Красота —
            <br />
            <span style={{ color: "hsl(322, 70%, 72%)" }}>это искусство</span>
          </h1>

          <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-gray-200">
            Перманентный макияж бровей, губ и глаз · Парикмахерские услуги
          </p>

          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#join")}
          >
            Записаться на приём
          </LiquidButton>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="text-white hover:text-pink-300 transition-colors p-2"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-pink-400" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-white hover:text-pink-300 transition-colors p-2"
            aria-label="Следующий слайд"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1 h-8 transition-all duration-300 ${
                currentSlide === index ? "bg-pink-400" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}