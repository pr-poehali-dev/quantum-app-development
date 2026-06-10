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
        <div className="flex items-center gap-3">
          {/* Декоративная линия + монограмма */}
          <div className="flex items-center gap-2">
            <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* === Силуэт 1 — девушка смотрит вправо === */}
              {/* Объёмные волосы сзади */}
              <path
                d="M3 8 C1 4 4 1 8 1 C13 1 16 3 17 6 C19 3 18 1 20 2 C22 3 21 6 20 8"
                stroke="rgb(236,72,153)" strokeWidth="1.1" fill="none" strokeLinecap="round"
              />
              {/* Пряди спадающие вниз */}
              <path
                d="M3 8 C2 14 2 20 4 26 C5 30 6 34 7 38"
                stroke="rgb(236,72,153)" strokeWidth="1.1" fill="none" strokeLinecap="round"
              />
              <path
                d="M20 8 C21 13 20 18 18 22 C17 26 16 30 16 34"
                stroke="rgb(236,72,153)" strokeWidth="1" fill="none" strokeLinecap="round"
              />
              {/* Профиль лица (смотрит вправо) */}
              <path
                d="M8 8 C6 9 5 11 5 14 C5 17 6 19 7 21 C8 22 8 23 7 25 C9 24 10 23 11 21 C12 22 13 22 14 21 C15 20 15 18 15 16 C15 12 13 9 10 8 Z"
                stroke="rgb(236,72,153)" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round"
              />
              {/* Нос */}
              <path d="M14 16 C15 17 15 18 14 19" stroke="rgb(236,72,153)" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
              {/* Шея */}
              <path d="M9 25 C9 28 10 31 10 33" stroke="rgb(236,72,153)" strokeWidth="1.1" fill="none" strokeLinecap="round"/>

              {/* === Силуэт 2 — девушка смотрит влево, чуть позади === */}
              {/* Объёмные волосы сзади */}
              <path
                d="M32 6 C30 2 33 0 37 0 C42 0 46 2 48 5 C50 2 49 0 51 1 C52 3 51 5 50 7"
                stroke="rgb(216,180,254)" strokeWidth="1.1" fill="none" strokeLinecap="round"
              />
              {/* Пряди спадающие вниз */}
              <path
                d="M32 7 C31 13 31 20 33 26 C34 30 35 34 36 38"
                stroke="rgb(216,180,254)" strokeWidth="1.1" fill="none" strokeLinecap="round"
              />
              <path
                d="M50 7 C51 12 50 18 48 23 C47 27 46 31 46 35"
                stroke="rgb(216,180,254)" strokeWidth="1" fill="none" strokeLinecap="round"
              />
              {/* Профиль лица (смотрит влево) */}
              <path
                d="M43 7 C45 8 46 10 46 13 C46 16 45 19 44 20 C43 22 43 23 44 25 C42 24 41 23 40 21 C39 22 38 22 37 21 C36 20 36 18 36 15 C36 11 38 8 41 7 Z"
                stroke="rgb(216,180,254)" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round"
              />
              {/* Нос */}
              <path d="M37 15 C36 16 36 17 37 18" stroke="rgb(216,180,254)" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
              {/* Шея */}
              <path d="M42 25 C42 28 41 31 41 33" stroke="rgb(216,180,254)" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
            </svg>
            {/* Вертикальный разделитель */}
            <div className="w-px h-10 bg-pink-400/70" />
          </div>
          {/* Текстовая часть */}
          <div className="flex flex-col leading-none">
            <span
              className="text-white text-lg md:text-xl font-semibold tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-serif)", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Стилист
            </span>
            <span
              className="text-pink-300 text-sm md:text-base font-light tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-serif)", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Технолог
            </span>
          </div>
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