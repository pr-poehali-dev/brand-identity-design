import { useEffect, useRef, useState } from "react";

export const PPTX_URL = "https://functions.poehali.dev/5284ad88-3321-4e62-8807-ab56837ea396";

export const IMG_TEXTILE = "https://cdn.poehali.dev/projects/3b373ac1-de12-4881-aa0b-a0a5a569a4b2/files/8c6054c2-ba45-4065-9b6c-cd5aea6ef9fa.jpg";
export const IMG_LOOKBOOK = "https://cdn.poehali.dev/projects/3b373ac1-de12-4881-aa0b-a0a5a569a4b2/files/acf20eb2-8a72-4389-80d8-bce002f0d0bf.jpg";
export const IMG_CAMPAIGN = "https://cdn.poehali.dev/projects/3b373ac1-de12-4881-aa0b-a0a5a569a4b2/files/3230b108-afb8-4c98-a1d0-505b6a416b49.jpg";

export function useInView(threshold = 0.15) {
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

export const NAV_ITEMS = [
  { label: "Манифест", id: "manifest" },
  { label: "Коллекция", id: "collection" },
  { label: "Материалы", id: "materials" },
  { label: "Палитра", id: "palette" },
  { label: "Постеры", id: "posters" },
  { label: "Процесс", id: "process" },
];

export const MATERIALS = [
  { num: "01", title: "Переработанные ткани", sub: "Recycled Fibres", desc: "Полиэстер из переработанных пластиковых бутылок, нейлон из рыболовных сетей. Каждая вещь — это второй шанс для материи.", icon: "Recycle" as const },
  { num: "02", title: "Органический хлопок", sub: "Organic Cotton", desc: "Сертифицированный GOTS хлопок без пестицидов и синтетических удобрений. Выращен на семейных фермах Индии и Турции.", icon: "Leaf" as const },
  { num: "03", title: "Биоразлагаемые волокна", sub: "Biodegradable Fibres", desc: "Лиоцелл TENCEL™, конопляное волокно, бамбук. Возвращаются в природу без следа через 2–5 лет.", icon: "Sprout" as const },
];

export const COLORS = [
  { name: "Слоновая кость", hex: "#F5F0E8", code: "IVORY 001" },
  { name: "Крем", hex: "#EDE5D8", code: "CREAM 002" },
  { name: "Песок", hex: "#C8B89A", code: "SAND 003" },
  { name: "Тёплый серый", hex: "#8A7F74", code: "WARM GREY 004" },
  { name: "Графит", hex: "#1C1916", code: "GRAPHITE 005" },
];

export const TOOLS = [
  { tool: "Poehali.dev", role: "Платформа создания", icon: "Zap" as const },
  { tool: "React + TypeScript", role: "Frontend разработка", icon: "Code" as const },
  { tool: "Cormorant Garamond", role: "Дисплейная типографика", icon: "Type" as const },
  { tool: "FLUX Image AI", role: "Генерация визуалов", icon: "Image" as const },
  { tool: "Tailwind CSS", role: "Система стилей", icon: "Palette" as const },
  { tool: "Claude AI", role: "Архитектура бренда", icon: "Brain" as const },
];

export const STATS = [
  { label: "Устойчивость", value: "100% eco" },
  { label: "Переработано", value: "78%" },
  { label: "Страны производства", value: "4" },
  { label: "CO₂ компенсировано", value: "100%" },
  { label: "Сертификаты", value: "GOTS, B-Corp" },
  { label: "Коллекций в год", value: "2" },
];
