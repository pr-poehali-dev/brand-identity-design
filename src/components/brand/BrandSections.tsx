import Icon from "@/components/ui/icon";
import {
  useInView,
  MATERIALS,
  COLORS,
  TOOLS,
  IMG_TEXTILE,
  IMG_LOOKBOOK,
  IMG_CAMPAIGN,
} from "./shared";

export function SectionManifest() {
  const { ref, visible } = useInView();
  return (
    <section id="manifest" ref={ref} className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <p
            className={`font-body text-xs tracking-[0.4em] uppercase mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ color: "var(--sand)" }}
          >
            01 — Манифест
          </p>
          <h2
            className={`font-display text-5xl md:text-6xl font-light leading-tight mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ color: "var(--graphite)" }}
          >
            Мода как <br /><em>ответственность</em>
          </h2>
          <div
            className={`h-px w-16 mb-8 transition-all duration-700 delay-200 origin-left ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ backgroundColor: "var(--sand)" }}
          />
        </div>
        <div
          className={`space-y-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-body text-sm font-light leading-relaxed" style={{ color: "var(--warm-gray)" }}>
            AURUM возник в 2022 году из простого вопроса: почему красота должна причинять вред?
            Основанный в Берлине тремя дизайнерами с разных континентов, бренд строится
            на убеждении, что авангард и устойчивость — не противоречие, а синергия.
          </p>
          <p className="font-body text-sm font-light leading-relaxed" style={{ color: "var(--warm-gray)" }}>
            Каждая коллекция — это архитектурное исследование формы. Мы работаем
            с геометрией как скульпторы: складки, плоскости и пустоты создают
            диалог между телом и пространством.
          </p>
          <p className="font-body text-sm font-light leading-relaxed" style={{ color: "var(--warm-gray)" }}>
            Наш покупатель — это человек, который думает. Который выбирает осознанно
            и хочет, чтобы его эстетика отражала его ценности.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionCollection() {
  const { ref, visible } = useInView();
  return (
    <section id="collection" ref={ref} style={{ backgroundColor: "var(--graphite)" }} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p
              className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--sand)" }}
            >
              02 — Коллекция
            </p>
            <h2
              className={`font-display text-5xl md:text-6xl font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--ivory)" }}
            >
              Terra Forma
            </h2>
          </div>
          <p
            className={`font-body text-xs tracking-widest uppercase transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ color: "var(--warm-gray)" }}
          >
            Весна — Лето 2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div
            className={`col-span-2 aspect-[4/3] overflow-hidden transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <img
              src={IMG_LOOKBOOK}
              alt="Terra Forma Lookbook"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div
              className={`flex-1 overflow-hidden transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <img
                src={IMG_TEXTILE}
                alt="Textile"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              className={`flex-1 p-8 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ backgroundColor: "var(--cream)" }}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--warm-gray)" }}>
                Описание
              </p>
              <p className="font-display text-xl font-light italic leading-relaxed" style={{ color: "var(--graphite)" }}>
                "Земля как основа — геометрия как язык. Коллекция исследует архетипы формы."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionMaterials() {
  const { ref, visible } = useInView();
  return (
    <section id="materials" ref={ref} className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <p
          className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--sand)" }}
        >
          03 — Инновационные материалы
        </p>
        <h2
          className={`font-display text-5xl md:text-6xl font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--graphite)" }}
        >
          Материи будущего
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--sand)" }}>
        {MATERIALS.map((mat, i) => (
          <div
            key={mat.num}
            className={`p-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ backgroundColor: "var(--ivory)", transitionDelay: `${(i + 2) * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-8">
              <span className="font-body text-xs tracking-widest" style={{ color: "var(--warm-gray)" }}>{mat.num}</span>
              <Icon name={mat.icon} size={20} style={{ color: "var(--sand)" }} />
            </div>
            <h3 className="font-display text-2xl font-light mb-1" style={{ color: "var(--graphite)" }}>{mat.title}</h3>
            <p className="font-body text-xs tracking-widest uppercase mb-6" style={{ color: "var(--sand)" }}>{mat.sub}</p>
            <p className="font-body text-sm font-light leading-relaxed" style={{ color: "var(--warm-gray)" }}>{mat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionPalette() {
  const { ref, visible } = useInView();
  return (
    <section id="palette" ref={ref} style={{ backgroundColor: "var(--cream)" }} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--warm-gray)" }}
            >
              04 — Цветовая палитра
            </p>
            <h2
              className={`font-display text-5xl md:text-6xl font-light mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--graphite)" }}
            >
              Язык <br />нейтралитета
            </h2>
            <p
              className={`font-body text-sm font-light leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--warm-gray)" }}
            >
              Палитра вдохновлена природными минералами и необработанной землёй.
              Нейтральные тона создают фон для архитектурной формы — цвет служит форме,
              не конкурирует с ней.
            </p>
          </div>
          <div
            className={`space-y-3 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {COLORS.map((color) => (
              <div key={color.code} className="flex items-center gap-4 group cursor-default">
                <div
                  className="w-16 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 flex items-center justify-between">
                  <span className="font-display text-lg font-light" style={{ color: "var(--graphite)" }}>{color.name}</span>
                  <span className="font-body text-xs tracking-widest" style={{ color: "var(--warm-gray)" }}>{color.code}</span>
                </div>
                <span className="font-body text-xs" style={{ color: "var(--warm-gray)" }}>{color.hex}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t" style={{ borderColor: "var(--sand)" }}>
          <p className="font-body text-xs tracking-[0.4em] uppercase mb-8" style={{ color: "var(--warm-gray)" }}>
            Типографика
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>Заголовочный шрифт</p>
              <p className="font-display text-6xl font-light mb-2" style={{ color: "var(--graphite)" }}>Cormorant</p>
              <p className="font-display text-4xl italic font-light" style={{ color: "var(--warm-gray)" }}>Garamond</p>
              <p className="font-body text-xs mt-4 tracking-widest uppercase" style={{ color: "var(--sand)" }}>Light · Regular · Italic</p>
            </div>
            <div>
              <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: "var(--sand)" }}>Текстовый шрифт</p>
              <p className="font-body text-4xl font-light mb-2" style={{ color: "var(--graphite)" }}>Montserrat</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
              <p className="font-body text-xs mt-4 tracking-widest uppercase" style={{ color: "var(--sand)" }}>Light · Regular · Medium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionPosters() {
  const { ref, visible } = useInView();
  return (
    <section id="posters" ref={ref} style={{ backgroundColor: "var(--graphite)" }} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p
              className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--sand)" }}
            >
              05 — Рекламные материалы
            </p>
            <h2
              className={`font-display text-5xl md:text-6xl font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--ivory)" }}
            >
              Кампания
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div
            className={`relative overflow-hidden aspect-[3/4] transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <img src={IMG_CAMPAIGN} alt="Campaign Poster 1" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(to top, rgba(28,25,22,0.85) 0%, transparent 60%)" }}
            >
              <p className="font-body text-xs tracking-[0.4em] uppercase mb-2" style={{ color: "var(--sand)" }}>Плакат 01</p>
              <p className="font-display text-3xl font-light italic" style={{ color: "var(--ivory)" }}>
                "Форма<br />как смысл"
              </p>
            </div>
          </div>

          <div
            className={`relative overflow-hidden aspect-[3/4] transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <img src={IMG_LOOKBOOK} alt="Campaign Poster 2" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(to top, rgba(28,25,22,0.85) 0%, transparent 60%)" }}
            >
              <p className="font-body text-xs tracking-[0.4em] uppercase mb-2" style={{ color: "var(--sand)" }}>Плакат 02</p>
              <p className="font-display text-3xl font-light italic" style={{ color: "var(--ivory)" }}>
                "Земля<br />и тело"
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-1 relative overflow-hidden transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ height: "280px" }}
        >
          <img src={IMG_TEXTILE} alt="Banner" className="w-full h-full object-cover" style={{ filter: "brightness(0.5)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-body text-xs tracking-[0.6em] uppercase mb-4" style={{ color: "var(--sand)" }}>
                AURUM — Terra Forma Collection — SS24
              </p>
              <p className="font-display text-5xl md:text-7xl font-light" style={{ color: "var(--ivory)" }}>
                Носи землю легко
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionProcess() {
  const { ref, visible } = useInView();
  return (
    <section id="process" ref={ref} className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <p
          className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--sand)" }}
        >
          06 — Инструменты и процесс
        </p>
        <h2
          className={`font-display text-5xl md:text-6xl font-light mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--graphite)" }}
        >
          Как создавался<br /><em>AURUM</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div
          className={`space-y-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <h3 className="font-display text-2xl font-light mb-4" style={{ color: "var(--graphite)" }}>
              Концепция и позиционирование
            </h3>
            <div className="p-6 font-body text-xs leading-relaxed" style={{ backgroundColor: "var(--cream)" }}>
              <p className="mb-2 tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>Промпт для концепции:</p>
              <p className="font-light" style={{ color: "var(--graphite)" }}>
                "Создай концептуальный бренд устойчивой моды с авангардным дизайном для молодого поколения.
                Чистые линии, нейтральная палитра, геометрические формы — элегантная простота.
                Инновационные экологичные материалы: переработанные ткани, органический хлопок, биоразлагаемые волокна."
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-light mb-4" style={{ color: "var(--graphite)" }}>
              Визуальная идентичность
            </h3>
            <div className="p-6 font-body text-xs leading-relaxed" style={{ backgroundColor: "var(--cream)" }}>
              <p className="mb-2 tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>Промпт для изображений:</p>
              <p className="font-light" style={{ color: "var(--graphite)" }}>
                "Minimalist sustainable fashion editorial, geometric folded fabric in ivory and warm sand tones,
                overhead flat lay composition, recycled organic cotton texture, luxury fashion photography,
                soft natural light, clean background"
              </p>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-display text-2xl font-light mb-6" style={{ color: "var(--graphite)" }}>
            Стек технологий
          </h3>
          <div className="space-y-3">
            {TOOLS.map((item) => (
              <div key={item.tool} className="flex items-center gap-4 py-3 border-b" style={{ borderColor: "var(--sand)" }}>
                <Icon name={item.icon} size={16} style={{ color: "var(--sand)" }} />
                <span className="font-display text-lg font-light flex-1" style={{ color: "var(--graphite)" }}>{item.tool}</span>
                <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>{item.role}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8" style={{ backgroundColor: "var(--graphite)" }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--sand)" }}>
              Время создания
            </p>
            <p className="font-display text-5xl font-light mb-2" style={{ color: "var(--ivory)" }}>
              ~15 мин
            </p>
            <p className="font-body text-xs font-light" style={{ color: "var(--warm-gray)" }}>
              от идеи до полноценной презентации бренда
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
