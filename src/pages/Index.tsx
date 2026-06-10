import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Мы верим: каждая женщина достойна просыпаться красивой. Наша студия создаёт естественный перманентный макияж бровей, губ и глаз, который подчёркивает вашу индивидуальность. Здесь работают мастера с душой — мы не рисуем маски, мы раскрываем вашу настоящую красоту. Каждая процедура — это диалог, забота и результат, которым вы будете гордиться каждое утро."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/0f084e41-630d-4640-8148-9b200bae7082.jpg",
      alt: "Перманентный макияж бровей",
      title: "Перманент бровей",
      description:
        "Пудровые брови, волосковая техника, акварельные брови — подбираем форму и технику индивидуально под ваш тип лица. Результат держится до 2–3 лет. Никакого «татуажного» вида — только естественная красота с первого дня.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/c06c03b5-3769-4ee2-b0ab-f71bb888868d.jpg",
      alt: "Перманентный макияж губ и глаз",
      title: "Перманент губ и глаз",
      description:
        "Акварельные губы, стрелки, межресничный татуаж — процедуры, которые экономят ваше время каждое утро. Пигменты премиум-класса, безопасные составы и деликатная работа мастера гарантируют результат, которым вы влюбитесь.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/a1df1aa2-851f-422f-8527-4a0320f6c1d0.jpg",
      alt: "Парикмахерские услуги",
      title: "Парикмахерские услуги",
      description:
        "Стрижки, окрашивание, уходовые процедуры и укладки — полный спектр услуг для ваших волос. Мы работаем с профессиональной косметикой и следим за трендами, чтобы вы всегда выглядели безупречно.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium tracking-[0.3em] text-pink-500 mb-4 uppercase">Наша философия</p>
            <h2
              className="text-4xl md:text-6xl font-light tracking-wider mb-12 text-gray-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              О студии
            </h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Services / Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <p className="text-sm font-medium tracking-[0.3em] text-pink-500 mb-4 uppercase">Что мы делаем</p>
              <h2
                className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-gray-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Наши услуги
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">
                Каждая процедура — это индивидуальный подход и забота о вашей красоте.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-[0.3em] text-pink-500 mb-4 uppercase">Мнения клиентов</p>
            <h2
              className="text-4xl md:text-6xl font-light tracking-wider text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">гости</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные отзывы клиентов, которые уже открыли для себя искусство перманентного макияжа.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Final CTA with parallax */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/e2f89806-e3cb-42d8-8f66-d39591346c35.jpg"
          mobileImage="https://cdn.poehali.dev/projects/e7e6ab4d-81f6-40a4-9d4d-b6c3632be3a7/files/e2f89806-e3cb-42d8-8f66-d39591346c35.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}