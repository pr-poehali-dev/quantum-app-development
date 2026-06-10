import type * as React from "react"
import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { MapPin, Users, Sparkles, Star } from "lucide-react"

interface SmoothScrollHeroProps {
  scrollHeight?: number
  desktopImage: string
  mobileImage: string
  initialClipPercentage?: number
  finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1875,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Clip path animation - image fully reveals by 70% scroll progress
  const clipStart = useTransform(scrollYProgress, [0, 0.7], [initialClipPercentage, 0])
  const clipEnd = useTransform(scrollYProgress, [0, 0.7], [finalClipPercentage, 100])
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

  // Background size animation - completes when image is fully revealed
  const backgroundSize = useTransform(scrollYProgress, [0, 0.7], ["170%", "100%"])

  // Scale animation - completes when image is fully revealed
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1])

  // CTA overlay animations - appears earlier and completes by 50%
  const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const ctaY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

  return (
    <div ref={containerRef} style={{ height: `${scrollHeight}px` }} className="relative w-full">
      <motion.div
        className="sticky top-0 h-screen w-full bg-black overflow-hidden"
        style={{
          clipPath,
          willChange: "transform",
        }}
      >
        {/* Desktop background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />
        {/* Mobile background */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CTA Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: ctaOpacity,
            y: ctaY,
          }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <p className="text-sm font-medium tracking-[0.3em] text-pink-300 mb-4 uppercase">Запишитесь сегодня</p>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Готовы стать
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-white bg-clip-text text-transparent">
                красивее каждый день?
              </span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-light">
              Запишитесь на консультацию — и мы подберём процедуры,
              <br className="hidden md:block" />
              которые подчеркнут именно вашу красоту.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-pink-200" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Довольных клиенток</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-pink-200" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Лет опыта</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-pink-200" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">3</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Вида перманента</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-pink-200" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">5.0</div>
                <div className="text-xs md:text-sm text-gray-300 font-medium">Средний рейтинг</div>
              </div>
            </div>

            {/* CTA Button */}
            <LiquidButton
              size="xxl"
              className="font-semibold text-lg tracking-wide px-12 py-4"
            >
              Записаться на приём
            </LiquidButton>

            {/* Trust Indicators */}
            <div className="mt-12 pt-6 border-t border-white/20">
              <p className="text-xs text-gray-400 mb-3 font-medium">МЫ ЗАБОТИМСЯ О КАЖДОЙ КЛИЕНТКЕ</p>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300">
                <span className="text-xs font-semibold">БЕЗОПАСНЫЕ ПИГМЕНТЫ</span>
                <span className="text-xs font-semibold">ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
                <span className="text-xs font-semibold">ГАРАНТИЯ РЕЗУЛЬТАТА</span>
                <span className="text-xs font-semibold">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SmoothScrollHero