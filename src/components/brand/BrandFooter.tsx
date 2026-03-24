import { STATS } from "./shared";
import DownloadPptxButton from "./DownloadPptxButton";

export default function BrandFooter() {
  return (
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
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-light mb-1" style={{ color: "var(--sand)" }}>{stat.value}</div>
                <div className="font-body text-xs" style={{ color: "var(--warm-gray)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 border-t border-b mb-10"
          style={{ borderColor: "rgba(200,184,154,0.15)" }}
        >
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
  );
}
