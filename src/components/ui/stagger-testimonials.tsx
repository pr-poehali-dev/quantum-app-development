import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Делала брови у многих мастеров, но здесь впервые получила именно то, что хотела. Форма идеальная, цвет натуральный. Теперь не представляю утро без этих бровей!",
    by: "Анна К., перманент бровей",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaK&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Сделала акварельные губы — это просто мечта! Утром встаёшь уже красивой, не надо тратить время на макияж. Мастер очень деликатный, больно почти не было.",
    by: "Марина С., перманент губ",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaS&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Стригусь здесь уже два года. Мастер всегда слышит что ты хочешь и предлагает что-то ещё лучше. Волосы после процедур живые и блестящие.",
    by: "Светлана Т., стрижка и уход",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SvetlanaT&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Боялась межресничного татуажа, но мастер всё объяснила и успокоила. Результат — стрелки 24/7 без туши. Подруги думают, что я всегда в макияже!",
    by: "Екатерина В., татуаж глаз",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaV&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Пришла на коррекцию формы бровей и влюбилась в мастера. Теперь хожу на все процедуры только сюда. Уют, профессионализм и результат на 100%.",
    by: "Ольга М., постоянный клиент",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaM&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Окрасила волосы в очень сложный оттенок — результат превзошёл все ожидания. Мастер — настоящий художник. Цвет держится уже 4 месяца!",
    by: "Дарья П., окрашивание",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DaryaP&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "После перманента бровей моя жизнь изменилась. Раньше тратила 30 минут на брови каждое утро. Теперь просто выхожу и чувствую себя ухоженной весь день.",
    by: "Наталья Р., пудровые брови",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NatalyaR&backgroundColor=0891b2&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Студия — это маленький рай. Всегда чисто, уютно, вкусный кофе. А главное — мастера, которые действительно любят своё дело. Рекомендую всем!",
    by: "Ирина Л., постоянный клиент",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IrinaL&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Делала волосковую технику бровей — очень естественный результат, будто брови настоящие. Знакомые долго не могли понять, в чём секрет моего преображения.",
    by: "Татьяна Н., волосковая техника",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TatyanaT&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Мастер по стрижкам — золотые руки. Сделала короткое каре, о котором мечтала годами. Объяснила как укладывать, посоветовала уход. Очень внимательный подход.",
    by: "Валерия К., стрижка",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ValeriyaK&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Впервые решилась на перманент губ и не пожалела ни секунды. Цвет подобрали идеально под мой тон кожи. Теперь даже без помады выгляжу ухоженно.",
    by: "Алина Д., акварельные губы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlinaD&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Хожу сюда уже три года. Здесь не просто делают красиво — здесь заботятся о тебе. Всегда учитывают пожелания и объясняют каждый шаг процедуры.",
    by: "Ксения Б., постоянный клиент",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KseniyaB&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "После процедуры восстановления волос — не могу поверить, что это мои волосы! Шёлковые, живые, блестящие. Мастер — профессионал высшего класса.",
    by: "Людмила О., уход за волосами",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LyudmilaO&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Пришла подругой и тоже записалась прямо в студии. Атмосфера очень располагает, мастера не давят и не навязывают лишнего. Буду постоянным клиентом!",
    by: "Юлия С., первый визит",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=YuliyaS&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Наконец-то нашла мастера, который понимает мой тип бровей. Делаю коррекцию каждые 6 недель и всегда выхожу довольная. Советую всем подругам!",
    by: "Полина Г., коррекция бровей",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=PolinaG&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "Перманент — это лучшее, что я сделала для себя. Экономлю час каждое утро и всегда выгляжу свежо. Мастер учла все мои пожелания с первого раза.",
    by: "Вероника Ф., перманент бровей и губ",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VeronikaF&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Студия — место силы для каждой женщины. Выхожу отсюда не просто красивой, а по-настоящему счастливой. Спасибо за заботу и профессионализм!",
    by: "Надежда В., постоянный клиент",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NadezhyaV&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Сделала сложное окрашивание — блонд с тонированием. Результат сказочный, волосы не пострадали. Мастер — настоящий профи, работает только с премиум-материалами.",
    by: "Анастасия Ч., окрашивание блонд",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnastasiyaCh&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Бровям требовался срочный спасательный круг — нарисованные дуги достали. Мастер сделала волосковую технику и теперь я не могу наглядеться на себя в зеркало.",
    by: "Милана Ж., коррекция бровей",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MilanaZh&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Атмосфера как у подруги дома — тепло, уютно и без спешки. При этом качество на уровне топовых студий города. Лучшее место для заботы о себе!",
    by: "Кристина Л., стрижка и брови",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KristinaL&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 text-white border-pink-600"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-pink-300",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        backgroundColor: isCenter ? "hsl(322, 70%, 48%)" : undefined,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(322 50% 80%)" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-pink-200 hover:bg-pink-500 hover:text-white hover:border-pink-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-pink-200 hover:bg-pink-500 hover:text-white hover:border-pink-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}