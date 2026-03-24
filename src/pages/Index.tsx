import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const PPTX_URL = "https://functions.poehali.dev/5284ad88-3321-4e62-8807-ab56837ea396";

function DownloadPptxButton() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setDone(false);
    try {
      const res = await fetch(PPTX_URL);
      const data = await res.json();
      if (data.url) {
        const a = document.createElement("a");
        a.href = data.url;
        a.download = data.filename || "AURUM_Presentation.pptx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setDone(true);
        setTimeout(() => setDone(false), 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:opacity-80 disabled:opacity-50"
      style={{ backgroundColor: "var(--ivory)", color: "var(--graphite)" }}
    >
      <Icon name={loading ? "Loader" : done ? "CheckCircle" : "Download"} size={16}
        className={loading ? "animate-spin" : ""} />
      <span className="font-body text-xs tracking-[0.2em] uppercase">
        {loading ? "Генерируем..." : done ? "Готово!" : "Скачать презентацию .pptx"}
      </span>
    </button>
  );
}

const IMG_TEXTILE = "https://cdn.poehali.dev/projects/3b373ac1-de12-4881-aa0b-a0a5a569a4b2/files/8c6054c2-ba45-4065-9b6c-cd5aea6ef9fa.jpg";
const IMG_LOOKBOOK = "https://cdn.poehali.dev/projects/3b373ac1-de12-4881-aa0b-a0a5a569a4b2/files/acf20eb2-8a72-4389-80d8-bce002f0d0bf.jpg";
const IMG_CAMPAIGN = "https://cdn.poehali.dev/projects/3b373ac1-de12-4881-aa0b-a0a5a569a4b2/files/3230b108-afb8-4c98-a1d0-505b6a416b49.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const NAV_ITEMS = [
  { label: "Манифест", id: "manifest" },
  { label: "Коллекция", id: "collection" },
  { label: "Материалы", id: "materials" },
  { label: "Палитра", id: "palette" },
  { label: "Постеры", id: "posters" },
  { label: "Процесс", id: "process" },
];

const MATERIALS = [
  { num: "01", title: "Переработанные ткани", sub: "Recycled Fibres", desc: "Полиэстер из переработанных пластиковых бутылок, нейлон из рыболовных сетей. Каждая вещь — это второй шанс для материи.", icon: "Recycle" as const },
  { num: "02", title: "Органический хлопок", sub: "Organic Cotton", desc: "Сертифицированный GOTS хлопок без пестицидов и синтетических удобрений. Выращен на семейных фермах Индии и Турции.", icon: "Leaf" as const },
  { num: "03", title: "Биоразлагаемые волокна", sub: "Biodegradable Fibres", desc: "Лиоцелл TENCEL™, конопляное волокно, бамбук. Возвращаются в природу без следа через 2–5 лет.", icon: "Sprout" as const },
];

const COLORS = [
  { name: "Слоновая кость", hex: "#F5F0E8", code: "IVORY 001" },
  { name: "Крем", hex: "#EDE5D8", code: "CREAM 002" },
  { name: "Песок", hex: "#C8B89A", code: "SAND 003" },
  { name: "Тёплый серый", hex: "#8A7F74", code: "WARM GREY 004" },
  { name: "Графит", hex: "#1C1916", code: "GRAPHITE 005" },
];

const TOOLS = [
  { tool: "Poehali.dev", role: "Платформа создания", icon: "Zap" as const },
  { tool: "React + TypeScript", role: "Frontend разработка", icon: "Code" as const },
  { tool: "Cormorant Garamond", role: "Дисплейная типографика", icon: "Type" as const },
  { tool: "FLUX Image AI", role: "Генерация визуалов", icon: "Image" as const },
  { tool: "Tailwind CSS", role: "Система стилей", icon: "Palette" as const },
  { tool: "Claude AI", role: "Архитектура бренда", icon: "Brain" as const },
];

const STATS = [
  { label: "Устойчивость", value: "100% eco" },
  { label: "Переработано", value: "78%" },
  { label: "Страны производства", value: "4" },
  { label: "CO₂ компенсировано", value: "100%" },
  { label: "Сертификаты", value: "GOTS, B-Corp" },
  { label: "Коллекций в год", value: "2" },
];

function SectionManifest() {
  const { ref, visible } = useInView();
  return (
    <section id="manifest" ref={ref} className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <p className={`font-body text-xs tracking-[0.4em] uppercase mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ color: "var(--sand)" }}>01 — Манифест</p>
          <h2 className={`font-display text-5xl md:text-6xl font-light leading-tight mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ color: "var(--graphite)" }}>
            Мода как <br /><em>ответственность</em>
          </h2>
          <div className={`h-px w-16 mb-8 transition-all duration-700 delay-200 origin-left ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ backgroundColor: "var(--sand)" }} />
        </div>
        <div className={`space-y-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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

function SectionCollection() {
  const { ref, visible } = useInView();
  return (
    <section id="collection" ref={ref} style={{ backgroundColor: "var(--graphite)" }} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--sand)" }}>02 — Коллекция</p>
            <h2 className={`font-display text-5xl md:text-6xl font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--ivory)" }}>
              Terra Forma
            </h2>
          </div>
          <p className={`font-body text-xs tracking-widest uppercase transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ color: "var(--warm-gray)" }}>Весна — Лето 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className={`col-span-2 aspect-[4/3] overflow-hidden transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={IMG_LOOKBOOK} alt="Terra Forma Lookbook" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="flex flex-col gap-1">
            <div className={`flex-1 overflow-hidden transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <img src={IMG_TEXTILE} alt="Textile" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className={`flex-1 p-8 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ backgroundColor: "var(--cream)" }}>
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

function SectionMaterials() {
  const { ref, visible } = useInView();
  return (
    <section id="materials" ref={ref} className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--sand)" }}>03 — Инновационные материалы</p>
        <h2 className={`font-display text-5xl md:text-6xl font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--graphite)" }}>
          Материи будущего
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--sand)" }}>
        {MATERIALS.map((mat, i) => (
          <div key={mat.num}
            className={`p-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ backgroundColor: "var(--ivory)", transitionDelay: `${(i + 2) * 100}ms` }}>
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

function SectionPalette() {
  const { ref, visible } = useInView();
  return (
    <section id="palette" ref={ref} style={{ backgroundColor: "var(--cream)" }} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--warm-gray)" }}>04 — Цветовая палитра</p>
            <h2 className={`font-display text-5xl md:text-6xl font-light mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--graphite)" }}>
              Язык <br />нейтралитета
            </h2>
            <p className={`font-body text-sm font-light leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--warm-gray)" }}>
              Палитра вдохновлена природными минералами и необработанной землёй.
              Нейтральные тона создают фон для архитектурной формы — цвет служит форме,
              не конкурирует с ней.
            </p>
          </div>
          <div className={`space-y-3 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {COLORS.map((color) => (
              <div key={color.code} className="flex items-center gap-4 group cursor-default">
                <div className="w-16 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: color.hex }} />
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

function SectionPosters() {
  const { ref, visible } = useInView();
  return (
    <section id="posters" ref={ref} style={{ backgroundColor: "var(--graphite)" }} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--sand)" }}>05 — Рекламные материалы</p>
            <h2 className={`font-display text-5xl md:text-6xl font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "var(--ivory)" }}>
              Кампания
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className={`relative overflow-hidden aspect-[3/4] transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={IMG_CAMPAIGN} alt="Campaign Poster 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(to top, rgba(28,25,22,0.85) 0%, transparent 60%)" }}>
              <p className="font-body text-xs tracking-[0.4em] uppercase mb-2" style={{ color: "var(--sand)" }}>Плакат 01</p>
              <p className="font-display text-3xl font-light italic" style={{ color: "var(--ivory)" }}>
                "Форма<br />как смысл"
              </p>
            </div>
          </div>

          <div className={`relative overflow-hidden aspect-[3/4] transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={IMG_LOOKBOOK} alt="Campaign Poster 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(to top, rgba(28,25,22,0.85) 0%, transparent 60%)" }}>
              <p className="font-body text-xs tracking-[0.4em] uppercase mb-2" style={{ color: "var(--sand)" }}>Плакат 02</p>
              <p className="font-display text-3xl font-light italic" style={{ color: "var(--ivory)" }}>
                "Земля<br />и тело"
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-1 relative overflow-hidden transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ height: "280px" }}>
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

function SectionProcess() {
  const { ref, visible } = useInView();
  return (
    <section id="process" ref={ref} className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className={`font-body text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--sand)" }}>06 — Инструменты и процесс</p>
        <h2 className={`font-display text-5xl md:text-6xl font-light mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ color: "var(--graphite)" }}>
          Как создавался<br /><em>AURUM</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className={`space-y-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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

        <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-7"}`}
        style={{
          backgroundColor: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--sand)" : "none",
        }}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="font-display text-2xl font-light tracking-[0.3em]"
            style={{ color: scrolled ? "var(--graphite)" : "var(--ivory)" }}>
            AURUM
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <button key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-60"
                style={{ color: scrolled ? "var(--graphite)" : "var(--ivory)" }}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <DownloadPptxButton />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_CAMPAIGN} alt="AURUM Campaign" className="w-full h-full object-cover" style={{ filter: "brightness(0.45)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,25,22,0.9) 0%, rgba(28,25,22,0.2) 60%, transparent 100%)" }} />

        <div className="absolute top-32 right-32 w-32 h-32 opacity-30 pointer-events-none" style={{ border: "1px solid var(--sand)" }} />
        <div className="absolute top-48 right-48 w-16 h-16 opacity-20 pointer-events-none" style={{ border: "1px solid var(--sand)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in" style={{ color: "var(--sand)" }}>
              Устойчивая мода · Авангардный дизайн
            </p>
            <h1 className="font-display font-light leading-none mb-8 animate-fade-up"
              style={{ color: "var(--ivory)", letterSpacing: "-0.02em", fontSize: "clamp(5rem, 15vw, 11rem)" }}>
              AURUM
            </h1>
            <div className="h-px w-24 mb-8 animate-line-grow" style={{ backgroundColor: "var(--sand)" }} />
            <p className="font-display text-2xl md:text-3xl font-light italic animate-fade-up delay-300"
              style={{ color: "var(--cream)", lineHeight: 1.5 }}>
              Одежда, рождённая из земли — <br />возвращающаяся к ней
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex items-center gap-3">
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>Прокрути вниз</span>
          <Icon name="ArrowDown" size={14} style={{ color: "var(--warm-gray)" }} />
        </div>
      </section>

      <SectionManifest />
      <SectionCollection />
      <SectionMaterials />
      <SectionPalette />
      <SectionPosters />
      <SectionProcess />

      {/* FOOTER */}
      <footer style={{ backgroundColor: "var(--graphite)" }} className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
            <div>
              <div className="font-display text-5xl font-light tracking-[0.3em] mb-4" style={{ color: "var(--ivory)" }}>
                AURUM
              </div>
              <p className="font-body text-xs font-light max-w-xs" style={{ color: "var(--warm-gray)" }}>
                Устойчивая мода с авангардным дизайном.<br />
                Берлин · 2024
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {STATS.map(stat => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-light mb-1" style={{ color: "var(--sand)" }}>{stat.value}</div>
                  <div className="font-body text-xs" style={{ color: "var(--warm-gray)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 border-t border-b mb-10"
            style={{ borderColor: "rgba(200,184,154,0.15)" }}>
            <div>
              <p className="font-display text-2xl italic font-light mb-1" style={{ color: "var(--ivory)" }}>
                Скачать презентацию бренда
              </p>
              <p className="font-body text-xs" style={{ color: "var(--warm-gray)" }}>
                8 слайдов · PowerPoint · Все разделы гайдлайна
              </p>
            </div>
            <DownloadPptxButton />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-body text-xs" style={{ color: "var(--warm-gray)" }}>
              © 2024 AURUM. Концептуальный бренд-проект.
            </p>
            <p className="font-body text-xs" style={{ color: "var(--warm-gray)" }}>
              Создано на <span style={{ color: "var(--sand)" }}>poehali.dev</span>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}