import Icon from "@/components/ui/icon";
import { NAV_ITEMS, IMG_CAMPAIGN } from "./shared";
import DownloadPptxButton from "./DownloadPptxButton";

interface BrandNavProps {
  scrolled: boolean;
  onNavClick: (id: string) => void;
}

export function BrandNav({ scrolled, onNavClick }: BrandNavProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-7"}`}
      style={{
        backgroundColor: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--sand)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div
          className="font-display text-2xl font-light tracking-[0.3em]"
          style={{ color: scrolled ? "var(--graphite)" : "var(--ivory)" }}
        >
          AURUM
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className="font-body text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-60"
              style={{ color: scrolled ? "var(--graphite)" : "var(--ivory)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <DownloadPptxButton />
        </div>
      </div>
    </nav>
  );
}

export function BrandHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMG_CAMPAIGN}
          alt="AURUM Campaign"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45)" }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(28,25,22,0.9) 0%, rgba(28,25,22,0.2) 60%, transparent 100%)",
        }}
      />

      <div
        className="absolute top-32 right-32 w-32 h-32 opacity-30 pointer-events-none"
        style={{ border: "1px solid var(--sand)" }}
      />
      <div
        className="absolute top-48 right-48 w-16 h-16 opacity-20 pointer-events-none"
        style={{ border: "1px solid var(--sand)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <p
            className="font-body text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in"
            style={{ color: "var(--sand)" }}
          >
            Устойчивая мода · Авангардный дизайн
          </p>
          <h1
            className="font-display font-light leading-none mb-8 animate-fade-up"
            style={{
              color: "var(--ivory)",
              letterSpacing: "-0.02em",
              fontSize: "clamp(5rem, 15vw, 11rem)",
            }}
          >
            AURUM
          </h1>
          <div
            className="h-px w-24 mb-8 animate-line-grow"
            style={{ backgroundColor: "var(--sand)" }}
          />
          <p
            className="font-display text-2xl md:text-3xl font-light italic animate-fade-up delay-300"
            style={{ color: "var(--cream)", lineHeight: 1.5 }}
          >
            Одежда, рождённая из земли — <br />возвращающаяся к ней
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-3">
        <span
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: "var(--warm-gray)" }}
        >
          Прокрути вниз
        </span>
        <Icon name="ArrowDown" size={14} style={{ color: "var(--warm-gray)" }} />
      </div>
    </section>
  );
}